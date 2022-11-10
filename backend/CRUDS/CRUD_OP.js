import db from "../Firebase/Database.js"; //Apprenticeship Object => bool
import admin from "firebase-admin";
import { Storage } from "@google-cloud/storage";
import { Apprenticeship } from "../Firebase/Models/Apprenticeship.js";
import { Role } from "../Firebase/Models/Role.js";
import { TeamMember } from "../Firebase/Models/TeamMember.js";
import apprenticeship from "../routes/apprenticeship.js";

const RolesCollection = db().collection("Roles");
const TeamMemberCollection = db().collection("TeamMembers");
const ApprenticeshipCollection = db().collection("Apprenticeship");

//adds internship to DB
async function commit(apprenticeship) {
  const batch = db().batch();
  const params = { ...apprenticeship };
  params.startDate = db.Timestamp.fromDate(new Date(params.startDate));
  params.endDate = db.Timestamp.fromDate(new Date(params.endDate));
  Object.values(apprenticeship.roles).forEach((role) => {
    const roleRef = RolesCollection.doc(role.id);
    batch.set(roleRef, role);
  });
  Object.values(apprenticeship.members).forEach((teamMember) => {
    const teamMemberRef = TeamMemberCollection.doc(teamMember.id);
    batch.set(teamMemberRef, teamMember);
  });
  batch.set(ApprenticeshipCollection.doc(params.id), params);
  try {
    await batch.commit();
    return apprenticeship;
  } catch (e) {
    console.log(e);
    return e;
  }
}

//Apprenticeship ID, Field Name = null => Bool
//removes Item from DB or Document
async function removeFromDB(ID, fieldName = null) {
  if (fieldName) {
    const res = await db()
      .collection("Apprenticeship")
      .doc(ID)
      .update({
        [fieldName]: admin.firestore.FieldValue.delete(),
      });
    if (res) {
      console.log("Deleted");
      return true;
    }
    return false;
  }
  const app = await getApprenticeship(ID);
  const batch = db().batch();
  if (!app) {
    return false;
  }
  app.roles.forEach((role) => {
    const roleRef = RolesCollection.doc(role.id);
    batch.delete(roleRef);
  });
  app.members.forEach((teamMember) => {
    const teamMemberRef = TeamMemberCollection.doc(teamMember.id);
    batch.delete(teamMemberRef);
  });
  batch.delete(ApprenticeshipCollection.doc(ID));
  const res = await batch.commit();
  if (res) {
    console.log("Deleted");
    return true;
  }
  return false;
}

async function getApprenticeship(ID) {
  const doc = await db().collection("Apprenticeship").doc(ID).get();
  return doc.exists ? new Apprenticeship(doc.data()) : null;
}

async function getAllApprenticeships() {
  return await db().collection("Apprenticeship").get();
}

//Apprenticeship ID, Field Name, Field Value => Bool
//Updates Content of document or object
async function updateInDB(Apprenticeship, fieldName = null, value = null) {
  if (fieldName && value) {
    const res = await db()
      .collection("Apprenticeship")
      .doc(Apprenticeship.id)
      .update({
        [fieldName]: value,
      });
    if (res) {
      console.log("Updated");
      return true;
    }
    return false;
  }

  Apprenticeship.startDate = db.Timestamp.fromDate(
    new Date(Apprenticeship.startDate)
  );
  Apprenticeship.endDate = db.Timestamp.fromDate(
    new Date(Apprenticeship.endDate)
  );
  const batch = db().batch();
  Apprenticeship.roles.forEach((role) => {
    role = { ...new Role(role) };
    const roleRef = RolesCollection.doc(role.id);
    batch.set(roleRef, role);
  });
  Apprenticeship.members.forEach((teamMember) => {
    teamMember = { ...new TeamMember(teamMember) };
    const teamMemberRef = TeamMemberCollection.doc(teamMember.id);
    batch.set(teamMemberRef, teamMember);
  });
  if (!isURL(Apprenticeship.logo)) {
    Apprenticeship.logo = await uploadToFireStore(
      Apprenticeship.logo,
      Apprenticeship.id + "1" + "_logo.png"
    );
  }
  console.log(Apprenticeship);
  if (!isURL(Apprenticeship.introVideo[0])) {
    console.log("Uploading Video");
    Apprenticeship.introVideo[0] = await uploadToFireStore(
      Apprenticeship.introVideo[0],
      Apprenticeship.introVideo[1]
    );
  }

  for (let i = 0; i < Apprenticeship.members.length; i++) {
    if (!isURL(Apprenticeship.members[i].photo)) {
      Apprenticeship.members[i].photo = await uploadToFireStore(
        Apprenticeship.members[i].photo,
        Apprenticeship.id + "1" + "_image.png"
      );
    }

    if (i === Apprenticeship.members.length - 1) {
      batch.set(
        ApprenticeshipCollection.doc(Apprenticeship.id),
        { ...Apprenticeship },
        { merge: true }
      );
      return await batch.commit();
    }
  }
}

//check if string is URL
function isURL(str) {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return pattern.test(str);
}

function getAllMembers() {
  return db.collection("TeamMembers").get();
}

function updateMember(member) {
  return db
    .collection("TeamMembers")
    .doc(member.id)
    .set({ ...member }, { merge: true });
}

function getAllRoles() {
  return db.collection("Roles").get();
}

function updateRole(role) {
  return db
    .collection("Roles")
    .doc(role.id)
    .set({ ...role }, { merge: true });
}

async function uploadToFireStore(file, fileName) {
  const bucketName = "gs://internship-db-1a1e1.appspot.com";
  const generationMatchPrecondition = 0;
  const storage = new Storage({
    projectId: "internship-db-1a1e1",
    keyFilename: "../backend/secrets/privateKey.json",
  });
  const options = {
    destination: fileName,
    preconditionOpts: { ifGenerationMatch: generationMatchPrecondition },
  };
  let fileArrayBuffer = dataURItoBlob(file);
  var fileUint8Array = new Uint8Array(fileArrayBuffer);

  try {
    await storage
      .bucket(bucketName)
      .file(fileName)
      .save(fileUint8Array, options);
    const url = await storage.bucket(bucketName).file(fileName).getSignedUrl({
      action: "read",
      expires: "03-09-2491",
    });
    return url[0];
  } catch (e) {
    console.log(e);
    return null;
  }
}

async function getFileFromFireStore(fileName) {
  const bucketName = "gs://internship-db-1a1e1.appspot.com";
  const storage = new Storage({
    projectId: "internship-db-1a1e1",
    keyFilename: "../backend/secrets/privateKey.json",
  });
  const options = {
    destination: fileName,
  };
  await storage.bucket(bucketName).file(fileName).download(options);
  console.log(`${fileName} downloaded from ${bucketName}`);
}
function dataURItoBlob(dataURI) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(",")[1]);

  // separate out the mime component
  // var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);

  // create a view into the buffer
  var ia = new Uint8Array(ab);

  // set the bytes of the buffer to the correct values
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  // write the ArrayBuffer to a blob, and you're done
  return ab;
}
export {
  commit,
  removeFromDB,
  updateInDB,
  getApprenticeship,
  getAllApprenticeships,
  getAllMembers,
  getAllRoles,
  uploadToFireStore,
  updateMember,
  updateRole,
  getFileFromFireStore,
};

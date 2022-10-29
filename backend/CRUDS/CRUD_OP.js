import db from "../Firebase/Database.js"; //Apprenticeship Object => bool
import admin from "firebase-admin";
import { Storage } from "@google-cloud/storage";
import { Apprenticeship } from "../Firebase/Models/Apprenticeship.js";
import { tryParse } from "firebase-tools/lib/utils.js";

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
    batch.set(teamMemberRef, { ...teamMember });
  });
  batch.set(ApprenticeshipCollection.doc(apprenticeship.id), params);
  try {
    await batch.commit();
    return apprenticeship.id;
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
  console.log(Apprenticeship);
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
  const res = await db()
    .collection("Apprenticeship")
    .doc(Apprenticeship.id)
    .set({ ...Apprenticeship }, { merge: true });
  if (res) {
    console.log("Updated");
    return true;
  }
  return false;
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

async function uploadToFireStore(filePath) {
  const fileName = filePath.split("/").pop();
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
  try {
    return await storage.bucket(bucketName).upload(filePath, options);
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

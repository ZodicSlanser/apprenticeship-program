import db from "../firebase/Database.js"; //Apprenticeship Object => bool
import admin from "firebase-admin";
import { getStorage } from "firebase-admin/storage";
const RolesCollection = db().collection("Roles");
const TeamMemberCollection = db().collection("TeamMembers");
const ApprenticeshipCollection = db().collection("Apprenticeship");
//adds internship to DB
function commit(apprenticeship) {
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
  batch.set(ApprenticeshipCollection.doc(apprenticeship.id), params);
  batch
    .commit()
    .then(() => {
      console.log("Apprenticeship Added");
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  return false;
}

//Apprenticeship ID, Field Name = null => Bool
//removes Item from DB or Document
function removeFromDB(ID, fieldName = null) {
  if (fieldName) {
    return db()
      .collection("Apprenticeship")
      .doc(ID)
      .update({
        [fieldName]: admin.firestore.FieldValue.delete(),
      });
  }
  return db.collection("Apprenticeship").doc(ID).delete();
}

function getApprenticeship(ID) {
  return db().collection("Apprenticeship").doc(ID).get();
}
function getAllApprenticeships() {
  return db().collection("Apprenticeship").get();
}

//Apprenticeship ID, Field Name, Field Value => Bool
//Updates Content of document or object
function updateInDB(Apprenticeship, fieldName = null, value = null) {
  console.log(Apprenticeship);
  if (fieldName && value) {
    return db()
      .collection("Apprenticeship")
      .doc(Apprenticeship.id)
      .update({
        [fieldName]: value,
      });
  }
  return db()
    .collection("Apprenticeship")
    .doc(Apprenticeship.id)
    .set({ ...Apprenticeship }, { merge: true });
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
function uploadToFireStore(file) {
  const storage = getStorage();
  const storageRef = storage.ref();
  const fileRef = storageRef.child(file.name);
  return fileRef.put(file).then((snapshot) => {
    return snapshot.ref.getDownloadURL();
  });
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
};

//TODO Implement CRUD Operations
import db from "../Firebase/Database.js"; //Apprenticeship Object => bool
import admin from "firebase-admin";
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
    return db
      .collection("Apprenticeship")
      .doc(ID)
      .update({
        [fieldName]: admin.firestore.FieldValue.delete(),
      });
  }
  return db.collection("Apprenticeship").doc(ID).delete();
}

function getApprenticeship(ID) {
  return db.collection("Apprenticeship").doc(ID).get();
}

//Apprenticeship ID, Field Name, Field Value => Bool
//Updates Content of document or object
function updateInDB(ID, fieldName = null, value = null) {
  if (fieldName && value) {
    return db
      .collection("Apprenticeship")
      .doc(ID)
      .update({
        [fieldName]: value,
      });
  } else if (value) {
    //entire Apprenticeship object
    return db.collection("Apprenticeship").doc(ID).set(value, { merge: true });
  }
  return false;
}
//module.exports = { commit, removeFromDB, updateInDB, getApprenticeship };
export { commit, removeFromDB, updateInDB, getApprenticeship };
//TODO Implement CRUD Operations
import db from "./Database.js";//Apprenticeship Object => bool
import admin from "firebase-admin";
//adds internship to DB
function commit(Apprenticeship) {
    return Apprenticeship.create();
}

//Apprenticeship ID, Field Name = null => Bool
//removes Item from DB or Document
function removeFromDB(ID, fieldName = null) {
    if (fieldName) {
        return db.collection("Apprenticeship").doc(ID).update({
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
        return db.collection("Apprenticeship").doc(ID).update({
            [fieldName]: value,
        });
    }
    else if (value) //enitre Apprenticeship object
    {
        return db.collection("Apprenticeship").doc(ID).set(value, { merge: true });
    }
    return false;
}
//module.exports = { commit, removeFromDB, updateInDB, getApprenticeship };
export { commit, removeFromDB, updateInDB, getApprenticeship };
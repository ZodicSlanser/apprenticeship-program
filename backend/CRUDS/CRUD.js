import {
  commit,
  getApprenticeship,
  getAllApprenticeships,
  removeFromDB,
  uploadToFireStore,
  updateInDB,
} from "./CRUD_OP.js";
import { apprenticeshipSchema } from "../firebase/Validation/ValidationSchema.js";
import { Apprenticeship } from "../firebase/Models/Apprenticeship.js";

//Create, Read, Update, Delete  --> Apprenticeship

//POST Apprenticeship to DB
//Apprenticeship object => bool
function AddApprenticeship(apprenticeship) {
  const validationResult = apprenticeshipSchema.validate(
    { ...apprenticeship },
    { abortEarly: true }
  );
  if (validationResult.error === undefined) {
    // uploadFile([apprenticeship.logo, apprenticeship.introVideo]).forEach((url) => {
    //   apprenticeship.logo = url[0];
    //   apprenticeship.introVideo = url[1];
    //   commit(apprenticeship);
    // }
    // );
    commit(apprenticeship);
    console.log("Commit done successfully");
    return "Commit done successfully";
  } else {
    console.log(validationResult.error);
    return validationResult.error;
  }
}

//GET DB to API
//int ID => Apprenticeship object / null
function ViewApprenticeship(ID = null) {
 return ID != null? getApprenticeship(ID) : getAllApprenticeships();
}

//POST API -> DB
//int ID => bool
function DeleteApprenticeship(ID) {
  //TODO : 1- Validation
  //ValidateApprenticeship()
  //Delete Apprenticeship from DB and return true
  //Delete()
  //false
  removeFromDB(ID)
    .then(() => {
      return true;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
  return false;
}

//POST API -> DB
//old Apprenticeship ID, New Apprenticeship Object => bool
function UpdateApprenticeship(apprenticeship) {
  //1- Validation
  //ValidateApprenticeship()
  //2- Update Document by ID
  //updateInDB()
  apprenticeship = Object.values(apprenticeship)[0];
  updateInDB(apprenticeship, null, null)
    .then(() => {
      return true;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
  return false;
}

//Create, Read, Update, Delete --> Fields

//Add Field value to Apprenticeship Object.
//Field Name, Value, Apprenticeship object => bool
function AddValue(fieldName, value, apprenticeship) {
  // 1- Validate FieldName
  // 2- Validate Value
  // 3- Add to Apprenticeship object
  apprenticeshipSchema
    .validateAsync(apprenticeship)
    .then(() => {
      return updateInDB(apprenticeship.id, fieldName, value);
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
  return false;
}

//POST Delete field from Apprenticeship Document
//Apprenticeship ID, Field => Bool
function DeleteField(ID, fieldName) {
  // 1- Validate FieldName
  // 2- Validate Apprenticeship
  // 3- Delete field from Apprenticeship Document
  return removeFromDB(ID, fieldName);
}
function uploadFile(file) {
  uploadToFireStore(file).then((url) => {
    return url;
  });
}
export {
  AddApprenticeship,
  ViewApprenticeship,
  DeleteApprenticeship,
  UpdateApprenticeship,
  AddValue,
  DeleteField,
  uploadFile,
};

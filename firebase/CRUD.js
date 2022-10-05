//TODO: 1- Add,Update,Delete,View --> Apprenticeship

//POST Apprenticeship to DB
//Apprenticeship object => bool
function AddApprenticeship(apprenticeship) {
    //TODO: 1- Validation
    //ValidateApprenticeship(apprenticeship) : Bool
    //TODO: 2- Add to DB
    //Commit(apprenticeship) : void
}

//GET DB to API
//int ID => Apprenticeship object / null
function ViewApprenticeship(ID){
    //TODO: 1- Validation
    //ValidateApprenticeship()
    //TODO: 2- return from DB
    //returnApprenticeship()
}

//POST API -> DB
//int ID => bool
function DeleteApprenticeship(ID){
    //TODO: 1- Validation
    //ValidateApprenticeship()
    //Delete Apprenticeship from DB and return true
    //Delete()
    //false

}

//POST API -> DB
//old Apprenticeship ID, New Apprenticeship Object => bool
function UpdateApprenticeship(ID){
    //TODO: 1- Validation
    //ValidateApprenticeship()
    //TODO 2- Update Document by ID
    //updateInDB()
}

//TODO: 2- Add,Update,Delete,View --> Fields

//Add Field value to Apprenticeship Object.
//Field Name, Value, Apprenticeship object => bool
function AddValue(fieldName,value,Apprenticeship){
    //TODO 1- Validate FieldName
    //ValidateField() -> Bool
    //TODO 2- Validate Value
    //ValidateValue() => bool
    //TODO 3- Add to Apprenticeship object
    //updateInDB() => bool
}

//POST Update Value in Apprenticeship Document
//Field Name, Value, Apprenticeship ID => bool
function UpdateField(ID,fieldName,value){
    //TODO 1- Validate FieldName
    //ValidateField() -> Bool
    //TODO 2- Validate Value
    //ValidateValue() => bool
    //TODO 3- Validate Apprenticeship
    //ValidateApprenticeship() => bool
    //TODO 4- replace value in firebase
    //updateInDB() =>
}

//POST Delete field from Apprenticeship Document
//Apprenticeship ID, Field => Bool
function DeleteField(ID,fieldName){
    //TODO 1- Validate FieldName
    //ValidateField() -> bool
    //TODO 2- Validate Apprenticeship
    //ValidateApprenticeship() => bool
    //TODO 3- Delete field from Apprenticeship Document
    //removeFromDB() => bool
}



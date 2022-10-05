const _ = require("lodash");
function validateRoles(roles) {
    //check if roles is array object
    if(!_.isArray(roles))
        return false;
    return true;
}
function validateResources(resources) {
    //check if resources is array object
    return true;
}
function validateScheduleData(schedule) {
    return true;
}
function validateOverviewData(overview) {
    return true;
}
function validateInternshipData(internship) {
    //check if resources, roles is array object
    if(
        !validateResources(internship.resources)||
        !validateRoles(internship.roles)||
        !validateScheduleData(internship.schedule)||
        !validateOverviewData(internship.overview)
    )
        return false;
    return true;
}


//TODO Implement the following Validations

//Internship object => boolean
//Check for fields,Format,Data Structure of Internship object
function ValidateInternship(){

}

//Field Name => Bool
//Checks that THIS Field Name exists in THIS DB
function ValidateField(ID,fieldName){

}

//Field Name, Value => Bool
//Checks that this datatype is valid for this field
function validateValue(fieldName,Value){
}







module.exports = validateInternshipData





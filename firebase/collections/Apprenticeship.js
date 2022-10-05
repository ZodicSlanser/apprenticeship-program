//create class using prototype
class Apprenticeship {
    constructor(_id, _logo, _title, _compDesc, _appDesc, _introVideo, _teamType, _roles, _members, _startDate, _endDate) {
        this.id = _id != null? _id : console.log("Cannot be null");
        this.logo = typeof _logo === "string"? _logo :  console.log("Cannot be null");
        this.title = typeof _title === "string"? _title : console.log("Cannot be null");
        this.compDesc = typeof _compDesc === "string"? _compDesc : console.log("Cannot be null");
        this.appDesc = typeof _appDesc === "string"? _appDesc : console.log("Cannot be null");
        this.introVideo = typeof _introVideo === "string"? _introVideo : console.log("Cannot be null");
        this.teamType = _teamType;   //TODO add Enum type/validation
                                    //  _teamType instanceof Enum? _teamType : throw("invalid team type");
        this.roles = _roles instanceof Array && _roles.length !== 0? _roles.map(r => ({...r})) : console.log("Invalid");
        this.members = _members instanceof Array && _members.length !== 0? _members.map(r => ({...r})) : console.log("Invalid");
        this.startDate = _startDate;
        this.endDate = _endDate;
    }
}


//export class
module.exports =Apprenticeship;
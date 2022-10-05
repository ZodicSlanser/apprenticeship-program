db = require("./FirebaseConstants")
const RolesCollection =  db.collection("Roles");
class Roles{
    constructor( type, desc, reqSkills, compSkills, hours, location) {
        this._id = RolesCollection.doc().id;
        this._type = type;
        this._desc = desc;
        this._reqSkills = reqSkills;
        this._compSkills = compSkills;
        this._hours = hours;
        this._location = location;
        RolesCollection.doc(this._id).set({...this}).then(() => {
        });
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    get desc() {
        return this._desc;
    }

    set desc(value) {
        this._desc = value;
    }

    get reqSkills() {
        return this._reqSkills;
    }

    set reqSkills(value) {
        this._reqSkills = value;
    }

    get compSkills() {
        return this._compSkills;
    }

    set compSkills(value) {
        this._compSkills = value;
    }

    get hours() {
        return this._hours;
    }

    set hours(value) {
        this._hours = value;
    }

    get location() {
        return this._location;
    }

    set location(value) {
        this._location = value;
    }
    exp(){
        return {...this}
    }
}
module.exports =Roles

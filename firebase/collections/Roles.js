db = require("./FirebaseConstants")
const RolesCollection =  db.collection("Roles");
class Roles{
    constructor( type, desc, reqSkills, compSkills, hours, location) {
        this.id = RolesCollection.doc().id;
        this.type = type;
        this.desc = desc;
        this.reqSkills = reqSkills;
        this.compSkills = compSkills;
        this.hours = hours;
        this.location = location;
        RolesCollection.doc(this.id).set({...this}).then(() => {
        });
    }

    exp(){
        return {...this}
    }
}
module.exports =Roles

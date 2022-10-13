import db from "../Database.js";

const RolesCollection = db().collection("Roles");

class Role {
  constructor({ id, type, desc, reqSkills, compSkills, hours, location }) {
    this.id = id || RolesCollection.doc().id;
    this.type = type;
    this.desc = desc;
    this.reqSkills = reqSkills;
    this.compSkills = compSkills;
    this.hours = hours;
    this.location = location;
  }
}

export { Role, RolesCollection };

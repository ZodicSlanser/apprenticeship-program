import db from "../Database.js";

const RolesCollection = db.collection("Roles");

class Role {
  constructor({ type, desc, reqSkills, compSkills, hours, location }) {
    this.id = RolesCollection.doc().id;
    this.type = type;
    this.desc = desc;
    this.reqSkills = reqSkills;
    this.compSkills = compSkills;
    this.hours = hours;
    this.location = location;
    RolesCollection.doc(this.id)
      .set({ ...this })
      .then(() => {});
  }
}

export { Role, RolesCollection };

import db from "../Database.js";

const TeamMemberCollection = db().collection("TeamMembers");

class TeamMember {
  constructor({ id, name, photo, socialURL }) {
    this.id = id || TeamMemberCollection.doc().id;
    this.name = name;
    this.photo = photo;
    this.socialURL = socialURL;
  }
}

export { TeamMember, TeamMemberCollection };

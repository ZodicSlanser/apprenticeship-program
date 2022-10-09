import db from "../Database.js";

const TeamMemberCollection = db.collection("TeamMembers");

class TeamMember {
  constructor({ name, photo, socialURL }) {
    this.id = TeamMemberCollection.doc().id;
    this.name = name;
    this.photo = photo;
    this.socialURL = socialURL;
    TeamMemberCollection.doc(this.id)
      .set({ ...this })
      .then(() => {});
  }
}

export { TeamMember, TeamMemberCollection };

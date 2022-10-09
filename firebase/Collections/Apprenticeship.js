import db from "../Database.js";

const ApprenticeshipCollection = db.collection("Apprenticeship");

//create class using prototype
class Apprenticeship {
  constructor({
    logo,
    title,
    compDesc,
    appDesc,
    introVideo,
    teamType,
    roles,
    members,
    startDate,
    endDate,
  }) {
    this.id = ApprenticeshipCollection.doc().id;
    this.logo = typeof logo === "string" ? logo : console.log("Cannot be null");
    this.title =
      typeof title === "string" ? title : console.log("Cannot be null");
    this.compDesc =
      typeof compDesc === "string" ? compDesc : console.log("Cannot be null");
    this.appDesc =
      typeof appDesc === "string" ? appDesc : console.log("Cannot be null");
    this.introVideo =
      typeof introVideo === "string"
        ? introVideo
        : console.log("Cannot be null");
    this.teamType = teamType; //TODO add Enum type/validation
    //  _teamType instanceof Enum? _teamType : throw("invalid team type");
    this.roles =
      roles instanceof Array && roles.length !== 0
        ? roles.map((r) => ({ ...r }))
        : console.log("Invalid");
    this.members =
      members instanceof Array && members.length !== 0
        ? members.map((r) => ({ ...r }))
        : console.log("Invalid");
    this.startDate = startDate;
    this.endDate = endDate;
  }
  create = () => {
    const params = { ...this };
    delete params["create"];
    return ApprenticeshipCollection.doc(this.id)
      .set(params);
  };
}

export { Apprenticeship, ApprenticeshipCollection };

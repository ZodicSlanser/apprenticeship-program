import db from "../Database.js";
const ApprenticeshipCollection = db().collection("Apprenticeship");

//create class using prototype
class Apprenticeship {
  constructor({
    id,
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
    this.id = id || ApprenticeshipCollection.doc().id;
    this.logo = logo;
    this.title = title;
    this.compDesc = compDesc;
    this.appDesc = appDesc;
    this.introVideo = introVideo;
    this.teamType = teamType;
    this.roles = roles;
    this.members = members;
    this.startDate = startDate;
    this.endDate = endDate;
  }

  teamType = {
    "Web Platform": 0,
    "Mobile App": 1,
    Growth: 2,
    "Marketing Website": 3,
    Prototyping: 4,
    Data: 5,
    "Custom Team": 6,
  };
}

export { Apprenticeship, ApprenticeshipCollection };

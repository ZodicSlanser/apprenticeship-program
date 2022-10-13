import { Role } from "./firebase/Collections/Role.js";
import { TeamMember } from "./firebase/Collections/TeamMember.js";
import { Apprenticeship } from "./firebase/Collections/Apprenticeship.js";
import admin from "firebase-admin";
import { AddApprenticeship, ViewApprenticeship, DeleteApprenticeship, UpdateApprenticeship, AddValue, UpdateField, DeleteField } from "./firebase/CRUD.js";
const roles = [
  {
    type: 2,
    desc: "des",
    compSkills: ["C#"],
    reqSkills: ["java"],
    hours: 8,
    location: "cairo",
  },
  {
    type: 2,
    desc: "des",
    compSkills: ["C#"],
    reqSkills: ["java"],
    hours: 8,
    location: "cairo",
  },
  {
    type: 2,
    desc: "des",
    compSkills: ["C#"],
    reqSkills: ["java"],
    hours: 8,
    location: "cairo",
  },
];

const members = [
  { name: "ali", photo: "photo-link", socialURL: "www.github.com" },
  { name: "ahmed", photo: "photo-link", socialURL: "www.twitter.com" },
  { name: "saif", photo: "photo-link", socialURL: "www.facebook.com" },
];

const apprenticeship = new Apprenticeship({
  logo: "logo-link",
  title: "title",
  compDesc: "company des",
  appDesc: "app desc",
  introVideo: "video-link",
  teamType: 1,
  roles: roles.map((r) => new Role(r)),
  members: members.map((m) => new TeamMember(m)),
  startDate: new Date(),
  endDate: new Date(),
});


AddApprenticeship(apprenticeship);

// AddApprenticeship(apprenticeship).then((res) => {
//   // var obj = await ViewApprenticeship(id);
//   // //cast to Apprenticeship
//   // var app = new Apprenticeship(obj.data());
//   // console.log(app);
//   //DeleteApprenticeship(id);
//   // apprenticeship.logo = "new-logo-link";
//   // UpdateApprenticeship(apprenticeship);
//   //UpdateField(id, "logo", "new logo");
//   //DeleteField(id, "roles");
// });


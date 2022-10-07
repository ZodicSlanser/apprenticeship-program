import { Role } from "./firebase/Collections/Role.js";
import { TeamMember } from "./firebase/Collections/TeamMember.js";
import { Apprenticeship } from "./firebase/Collections/Apprenticeship.js";
import admin from "firebase-admin";

const roles = [
  {
    type: 2,
    desc: "des",
    compSkills: "C#",
    reqSkills: "java",
    hours: 8,
    location: "cairo",
  },
  {
    type: 2,
    desc: "des",
    compSkills: "C#",
    reqSkills: "java",
    hours: 8,
    location: "cairo",
  },
  {
    type: 2,
    desc: "des",
    compSkills: "C#",
    reqSkills: "java",
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
  startDate: admin.firestore.Timestamp.fromDate(new Date()),
  endDate: admin.firestore.Timestamp.fromDate(new Date()),
});

apprenticeship.create();

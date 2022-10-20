import request from "request";
import { Role } from "./Models/Role.js";
import { TeamMember } from "./Models/TeamMember.js";
import { Apprenticeship } from "./Models/Apprenticeship.js";
const clientHost = "localhost:9000";

// uri: "http://" + clientHost + "/{ operation to be called }"
function updateClient(postData) {
  const clientServerOptions = {
    uri: "http://" + clientHost + "/add",
    body: JSON.stringify(postData),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };

  request(clientServerOptions, function (error, response) {
    console.log(error, response.body);
  });
}
const roles = [
  {
    type: 2,
    desc: "des",
    compSkills: ["C#"],
    reqSkills: ["java"],
    hours: 8,
    location: "Test",
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
updateClient(apprenticeship);

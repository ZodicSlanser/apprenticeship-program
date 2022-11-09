import request from "request";
import { Role } from "./Models/Role.js";
import { TeamMember } from "./Models/TeamMember.js";
import { Apprenticeship } from "./Models/Apprenticeship.js";
const clientHost = "localhost:9000";

//adds the apprenticeship object to the Database and assigns an ID to it
function addApprenticeship(postData, endpoint = "/add") {
  const clientServerOptions = {
    uri: "http://" + clientHost + endpoint,
    body: JSON.stringify(postData),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  request(clientServerOptions, function (error, response) {
    console.log(response.body);
  });
}

//adds the
function viewApprenticeship(ID, endpoint = "/view") {
  const clientServerOptions = {
    uri: "http://" + clientHost + endpoint,
    body: JSON.stringify(ID),
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  request(clientServerOptions, function (error, response) {
    console.log(response.body);
  });
}
function viewAllApprenticeships(endpoint = "/view-all") {
  const clientServerOptions = {
    uri: "http://" + clientHost + endpoint,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  request(clientServerOptions, function (error, response) {
    console.log(response.body);
  });
}
function deleteApprenticeship(ID, endpoint = "/delete") {
  const clientServerOptions = {
    uri: "http://" + clientHost + endpoint,
    body: JSON.stringify(ID),
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  request(clientServerOptions, function (error, response) {
    console.log(response.body);
  });
}
function updateApprenticeship(apprenticeship, endpoint = "/update") {
  const clientServerOptions = {
    uri: "http://" + clientHost + endpoint,
    body: JSON.stringify({ apprenticeship }),
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  };
  request(clientServerOptions, function (error, response) {
    console.log(response.body);
  });
}
function addValue(field, value, apprenticeship, endpoint = "/add-value") {
  const clientServerOptions = {
    uri: "http://" + clientHost + endpoint,
    body: JSON.stringify({ field, value, apprenticeship }),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  request(clientServerOptions, function (error, response) {
    console.log(response.body);
  });
}
const roles = [
  {
    type: 1,
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
  logo: "./logo.jpg",
  title: "title",
  compDesc: "company des",
  appDesc: "app desc",
  introVideo: "./vid.jpeg",
  teamType: 1,
  roles: roles.map((r) => new Role(r)),
  members: members.map((m) => new TeamMember(m)),
  startDate: new Date(),
  endDate: new Date(),
});
//addApprenticeship(apprenticeship);

export {
  addApprenticeship,
  viewApprenticeship,
  viewAllApprenticeships,
  deleteApprenticeship,
  updateApprenticeship,
  addValue,
};

import request from 'request';
import { Role } from "./firebase/models/Role.js";
import { TeamMember } from "./firebase/models/TeamMember.js";
import { Apprenticeship } from "./firebase/models/Apprenticeship.js";
const clientHost = "localhost:9000";
function updateClient(postData) {
    var clientServerOptions = {
        uri: 'http://' + clientHost + '/',
        body: JSON.stringify(postData),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }
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
updateClient(apprenticeship);
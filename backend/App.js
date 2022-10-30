import { Apprenticeship } from "./Firebase/Models/Apprenticeship.js";
import {
  AddApprenticeship,
  ViewApprenticeship,
  DeleteApprenticeship,
  UpdateApprenticeship,
  AddValue,
  DeleteField,
} from "./CRUDS/CRUD.js";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { Role } from "./Firebase/Models/Role.js";
import { TeamMember } from "./Firebase/Models/TeamMember.js";
import { deleteApprenticeship } from "./Firebase/API.js";
import Router from "./routes/apprenticeship.js";
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Apprenticeship API",
      version: "1.0.0",
      description:
        "This is a REST API application made with Express and documented with Swagger",
    },
    servers: [
      {
        url: "http://localhost:9000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};
const specs = swaggerJsDoc(options);

const port = process.env.PORT || 9000;
const app = express();
app.use(
  cors({
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);
app.use("/apprenticeship", Router);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, () => console.log(`The server is running on port ${port}`));
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
  logo: "./frame.png",
  title: "title",
  compDesc: "company des",
  appDesc: "app desc",
  introVideo: "video-link",
  teamType: 1,
  roles: roles.map((role) => {
    return { ...new Role(role) };
  }),
  members: members.map((member) => {
    return { ...new TeamMember(member) };
  }),
  startDate: new Date(),
  endDate: new Date(),
});
// AddApprenticeship(apprenticeship).then((msg) => {
//   console.log(msg);
// });
//removeFromDB("irW3OGMyDMOEq3O5ae87").then((msg) => console.log(msg));

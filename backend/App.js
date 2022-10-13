import { Role } from "./firebase/models/Role.js";
import { TeamMember } from "./firebase/models/TeamMember.js";
import { Apprenticeship } from "./firebase/models/Apprenticeship.js";
import admin from "firebase-admin";
import {
  AddApprenticeship,
  ViewApprenticeship,
  DeleteApprenticeship,
  UpdateApprenticeship,
  AddValue,
  UpdateField,
  DeleteField,
} from "./CRUDS/CRUD.js";
import express from "express";
import bodyParser from "body-parser";
const port = process.env.PORT || 9000;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/", (req, res) => {
  console.log("receiving data ...");
  const msg = AddApprenticeship(new Apprenticeship(req.body));
  //TODO send error if failed
  res.send(`${msg}`);
});

app.listen(port, () => console.log(`The server is running on port ${port}`));

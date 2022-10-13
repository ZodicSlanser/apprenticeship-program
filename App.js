import { Role } from "./firebase/models/Role.js";
import { TeamMember } from "./firebase/models/TeamMember.js";
import { Apprenticeship } from "./firebase/models/Apprenticeship.js";
import admin from "firebase-admin";
import { AddApprenticeship, ViewApprenticeship, DeleteApprenticeship, UpdateApprenticeship, AddValue, UpdateField, DeleteField } from "./firebase/CRUD.js";
const port = 9000;
import express from "express";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


app.post('/', (req, res) => {
  console.log('receiving data ...');
  AddApprenticeship(new Apprenticeship(req.body));
  //TODO send error if failed
  res.send(req.body);
});

app.listen(port);


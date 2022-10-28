import { Apprenticeship } from "./Firebase/Models/Apprenticeship.js";
import {
  AddApprenticeship,
  ViewApprenticeship,
  DeleteApprenticeship,
  UpdateApprenticeship,
  AddValue,
  DeleteField
} from "./CRUDS/CRUD.js";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import { getFileFromFireStore, uploadToFireStore } from "./CRUDS/CRUD_OP.js";

const port = process.env.PORT || 9000;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
  }
));

app.post("/add", (req, res) => {
  console.log("receiving data ...");
  const msg = AddApprenticeship(new Apprenticeship(req.body));
  res.send(`${msg}`);
});
app.get("/view", async (req, res) => {
  console.log("receiving data ...");
  const msg = await ViewApprenticeship(req.query.id);
  res.send(JSON.stringify(msg));
});
app.get("/view-all", (req, res) => {
  console.log("receiving data ...");
  ViewApprenticeship().then((data) => {
    const apprenticeships = [];
    data.forEach((doc) => {
      apprenticeships.push(new Apprenticeship(doc.data()));
    });
    console.log(apprenticeships);
    res.send(apprenticeships);
  });
});

app.delete("/delete", (req, res) => {
  console.log("receiving data ...");
  console.log(req.body?.id);
  const msg = DeleteApprenticeship(req.body?.id);
  res.send(`${msg}`);
});
//update apprenticeship
app.put("/update", (req, res) => {
  console.log("receiving data ...");
  const msg = UpdateApprenticeship(req.body);
  res.send(`${msg}`);
});
//add value to apprenticeship
app.post("/add-value", (req, res) => {
  console.log("receiving data ...");
  const msg = AddValue(
    req.body.field,
    req.body.value,
    new Apprenticeship(req.body.apprenticeship)
  );
  res.send(`${msg}`);
});
//delete field in apprenticeship
app.delete("/delete-field", (req, res) => {
  console.log("receiving data ...");
  const msg = DeleteField(req.body.id, req.body.field);
  res.send(`${msg}`);
});

app.listen(port, () => console.log(`The server is running on port ${port}`));
getFileFromFireStore("frame.png").catch((err) => console.log(err));
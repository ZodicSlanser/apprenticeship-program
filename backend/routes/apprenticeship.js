import {
  AddApprenticeship,
  AddValue,
  DeleteApprenticeship,
  DeleteField,
  UpdateApprenticeship,
  ViewApprenticeship,
} from "../CRUDS/CRUD.js";
import { Apprenticeship } from "../Firebase/Models/Apprenticeship.js";
import Router from "express";
const router = Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     role:
 *      type: object
 *      required:
   *      - type
   *      - desc
   *      - compSkills
   *      - reqSkills
   *      - hours
 *        - location
 *        - id
 *      properties:
 *        type:
 *          type: integer
 *          description: The type of role
 *        desc:
 *          type: string
 *          description: The description of the role
 *        compSkills:
 *          type: array
 *          items:
 *              type: string
 *              description: The competencies required for the role
 *        reqSkills:
 *          type: array
 *          items:
 *            type: string
 *            description: The required skills for the role
 *        hours:
 *          type: integer
 *          description: The hours required for the role
 *        location:
 *          type: string
 *          description: The location of the role
 *        id:
 *          type: string
 *          description: The id of the role
 *      example:
 *          type: 2
 *          desc: "des"
 *          compSkills: ["C#"]
 *          reqSkills: ["java"]
 *          hours: 8
 *          location: "Test"
 *          id: "123"
 *     TeamMember:
 *      type: object
 *      required:
 *        - name
 *        - photo
 *        - socialURL
 *        - id
 *      properties:
*       name:
 *         type: string
 *         description: The name of the team member
*       photo:
 *         type: string
 *         description: The photo of the team member
*       socialURL:
 *         type: string
 *         description: The social URL of the team member
*       id:
 *         type: string
 *         description: The id of the team member
 *      example:
 *       name: "ali"
 *       photo: "photo-link"
 *       socialURL: "fb.com"
 *       id: "123"

 *     Apprenticeship:
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the apprenticeship
 *         title:
 *           type: string
 *           description: The title of the apprenticeship
 *         logo:
 *           type: string
 *           description: The logo of the apprenticeship
 *         compDesc:
 *           type: string
 *           description: The description of the company
 *         appDesc:
 *           type: string
 *           description: The description of the apprenticeship
 *         introVideo:
 *           type: string
 *           description: The intro video of the apprenticeship
 *         roles:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/role'
 *          description: The roles of the apprenticeship
 *         TeamMembers:
*           type: array
*           items:
*             $ref: '#/components/schemas/TeamMember'
*           description: The team members of the apprenticeship
 *         startDate:
 *          type: string
 *          format: date
 *          description: The start date of the apprenticeship
*         endDate:
 *          type: string
 *          format: date
 *          description: The end date of the apprenticeship

 *
 *
 *       example:
 *        id: adsadeAOkSAjA
 *        title: "title"
 *        logo: "./frame.png"
 *        compDesc: "company des"
 *        appDesc: "app desc"
 *        introVideo: "intro video"
 *        roles: [{"type": 2,"desc": "des","compSkills": ["C#"],"reqSkills": ["java"],"hours": 8,"location": "Test","id": "123"}]
 *        TeamMembers: [{"name": "ali","photo": "photo-link","socialURL": "fb.com","id": "123"}]
 *        startDate: "2021-05-01"
 *        endDate: "2021-05-01"
 *
 */

/**
 * @Swagger
 * /apprenticeship:
 *  get:
 *    summary: Returns the list of all the apprenticeships
 *    responses:
 *       200:
 *        description: The list of the apprenticeships
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Apprenticeship'
 *
 * */
router.get("/view-all", (req, res) => {
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

router.delete("/delete", (req, res) => {
  console.log("receiving data ...");
  console.log(req.body?.id);
  const msg = DeleteApprenticeship(req.body?.id);
  res.send(`${msg}`);
});
//update apprenticeship
router.put("/update", (req, res) => {
  console.log("receiving data ...");
  const msg = UpdateApprenticeship(req.body);
  res.send(`${msg}`);
});
//add value to apprenticeship
router.post("/add-value", (req, res) => {
  console.log("receiving data ...");
  AddValue(
    req.body.field,
    req.body.value,
    new Apprenticeship(req.body.apprenticeship)
  ).then((msg) => {
    res.send(`${msg}`);
  });
});
//delete field in apprenticeship
router.delete("/delete-field", (req, res) => {
  console.log("receiving data ...");
  DeleteField(req.body.id, req.body.field).then((msg) => {
    res.send(`${msg}`);
  });
});
router.post("/duplicate", (req, res) => {
  console.log("receiving data ...");
  req.body.id = null;
  AddApprenticeship(new Apprenticeship(req.body)).then((msg) => {
    res.send(`${msg}`);
  });
});

router.post("/add", (req, res) => {
  console.log("receiving data ...");
  console.log(req.body);
  const msg = AddApprenticeship(new Apprenticeship(req.body.data));
  res.send(`${msg}`);
});
router.get("/view", async (req, res) => {
  console.log("receiving data ...");
  const msg = await ViewApprenticeship(req.query.id);
  res.send(JSON.stringify(msg));
});

export default router;

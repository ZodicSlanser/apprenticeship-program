import joi from "joi";

const TeamMemberSchema = joi.object({
  id: joi.string().required(),
  name: joi.string().required(),
  photo: joi.string().required(),
  socialURL: joi.any().optional().allow("", null),
});

const RoleSchema = joi.object({
  id: joi
    .string()
    .required()
    .messages({ "any.required": "cannot post Role without an ID " }),
  type: joi
    .alternatives()
    .try(joi.string(), joi.number())
    .required()
    .messages({ "any.required": '"No team type was selected"' }),
  desc: joi.string().required(),
  reqSkills: joi.array().items(joi.string().required()),
  compSkills: joi.array().items(joi.string().required()),
  hours: joi.number().required(),
  location: joi.array().items(joi.string()).required(),
});
//validate filed is string or number
const apprenticeshipSchema = joi.object({
  id: joi.string().required(),
  logo: joi.alternatives().try(joi.string(), joi.any()).required(),
  title: joi.string().required(),
  compDesc: joi.string().required(),
  appDesc: joi.string().required(),
  introVideo: joi.any().required(),
  teamType: joi.alternatives().try(joi.string(), joi.number()).required(),
  roles: joi.array().items(RoleSchema).required(),
  members: joi.array().items(TeamMemberSchema).required(),
  startDate: joi.date().required(),
  endDate: joi.date().required(),
});
export { apprenticeshipSchema };

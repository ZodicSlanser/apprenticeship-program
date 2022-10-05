//init firebase
const admin = require('firebase-admin');
const serviceAccount = require('./privateKey.json');
const _ = require('lodash');
const Roles = require('./collections/Roles')
const TeamMember = require('./collections/TeamMember')
const print = console.log
const db = require('./collections/FirebaseConstants')
//create collection
const ApprenticeshipCollection = db.collection('Apprenticeships');
const Apprenticeship = require("./collections/Apprenticeship");
const RolesCollection =  db.collection("Roles");
const TeamMembers = db.collection('TeamMembers');
const validateApprenticeshipData = require("./validation");



function addApprenticeship(Apprenticeship) {
    // if(!validateApprenticeshipData(Apprenticeship))
    //     throw new Error("Invalid Apprenticeship data");
    return ApprenticeshipCollection.doc(Apprenticeship._id).set(Apprenticeship).then(() => {
        console.log("Apprenticeship added");
    }
    ).catch((error) => {
        console.log("Error adding Apprenticeship", error);
    }
    )
}

//create map of data
role1 = new Roles(
    2,
    "des",
    "java",
    "c#",
    8,
    "cairo"
).exp()
role2 = new Roles(
    2,
    "des",
    "java",
    "c#",
    8,
    "cairo"
).exp()
member1 = new TeamMember(
    "ali",
    "photo-link",
    "www.github.com"
).exp()
member2 = new TeamMember(
    "mahmoud",
    "photo-link",
    "www.github.com"
).exp()
member3 = new TeamMember(
    "omar",
    "photo-link",
    "www.github.com"
).exp()
apper=new Apprenticeship(
    ApprenticeshipCollection.doc().id,
    "logo-link",
    "title",
    "company des",
    "app desc",
    "video-link",
    1,
    [role1,role2],
    [member1, member2, member3],
    admin.firestore.Timestamp.fromDate(new Date()),
    admin.firestore.Timestamp.fromDate(new Date())
)
addApprenticeship(apper.exp());

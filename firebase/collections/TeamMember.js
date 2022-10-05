
db = require("./FirebaseConstants")
const TeamMemberCollection =  db.collection("TeamMembers");
class TeamMember{

    constructor( name, photo, socialURL) {
        this.id = TeamMemberCollection.doc().id;
        this.name = name;
        this.photo = photo;
        this.socialURL = socialURL;
        this.exp()
        TeamMemberCollection.doc(this.id).set({...this}).then(() => {
        });
    }

    exp(){
        return {...this}
    }
}
module.exports =TeamMember
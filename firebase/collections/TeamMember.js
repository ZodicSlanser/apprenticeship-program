
db = require("./FirebaseConstants")
const TeamMemberCollection =  db.collection("TeamMembers");
class TeamMember{

    constructor( name, photo, socialURL) {
        this._id = TeamMemberCollection.doc().id;
        this._name = name;
        this._photo = photo;
        this._socialURL = socialURL;
        this.exp()
        TeamMemberCollection.doc(this._id).set({...this}).then(() => {
        });
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get photo() {
        return this._photo;
    }

    set photo(value) {
        this._photo = value;
    }

    get socialURL() {
        return this._socialURL;
    }

    set socialURL(value) {
        this._socialURL = value;
    }
    exp(){
        return {...this}
    }
}
module.exports =TeamMember
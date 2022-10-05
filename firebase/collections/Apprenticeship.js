//create class using prototype

class Apprenticeship {
    constructor(_id, _logo, _title, _compDesc, _appDesc, _introVideo, _teamType, _roles, _members, _startDate,_endDate ) {
        this._id = _id;
        this._logo = _logo;
        this._title = _title;
        this._compDesc = _compDesc;
        this._appDesc = _appDesc;
        this._introVideo = _introVideo;
        this._teamType = _teamType;
        this._roles = _roles;
        this._members = _members;
        this._startDate = _startDate;
        this._endDate = _endDate;
        this.exp()

    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get logo() {
        return this._logo;
    }

    set logo(value) {
        this._logo = value;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get compDesc() {
        return this._compDesc;
    }

    set compDesc(value) {
        this._compDesc = value;
    }

    get appDesc() {
        return this._appDesc;
    }

    set appDesc(value) {
        this._appDesc = value;
    }

    get introVideo() {
        return this._introVideo;
    }

    set introVideo(value) {
        this._introVideo = value;
    }

    get teamType() {
        return this._teamType;
    }

    set teamType(value) {
        this._teamType = value;
    }

    get roles() {
        return this._roles;
    }

    set roles(value) {
        this._roles = value;
    }

    get members() {
        return this._members;
    }

    set members(value) {
        this._members = value;
    }

    get startDate() {
        return this._startDate;
    }

    set startDate(value) {
        this._startDate = value;
    }

    get endDate() {
        return this._endDate;
    }

    set endDate(value) {
        this._endDate = value;
    }

    exp(){
        return {...this}
    }
}

//export class
module.exports =Apprenticeship;
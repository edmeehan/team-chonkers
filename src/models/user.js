export default class UserModel {
  constructor({id = '', displayName = '', givenName = '', familyName = '', photoUrl = ''}) {
    this.id = id;
    this.name = displayName;
    this.fName = givenName;
    this.lName = familyName;
    this.image = photoUrl;
  };

  get getChonk() {
    return [
      this.id,
      this.name,
      this.image
    ]
  }

  get serialize() {
    return {
      id: this.id,
      displayName: this.name,
      givenName: this.fName,
      familyName: this.lName,
      photoUrl: this.image
    }
  }
}
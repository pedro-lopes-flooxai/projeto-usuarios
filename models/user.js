class User {

    constructor (name, gender, birth, country, email, password, photo, admin){

        this.name = name;
        this.gender = gender;
        this.birth = birth;
        this.country = country;
        this.email = email;
        this.password = password;
        this.photo = photo;
        this.admin = admin;
        this._register = new Date();

    }

    get name() {
        return this._name;
    }
    
    get gender() {
        return this._gender;
    }
    
    get birth() {
        return this._birth;
    }
    
    get country() {
        return this._country;
    }
    
    get email() {
        return this._email;
    }
    
    get password() {
        return this._password;
    }
    
    get photo() {
        return this._photo;
    }
    
    get admin() {
        return this._email;
    }
    
}
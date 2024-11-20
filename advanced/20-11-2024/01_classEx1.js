// expression 
const person = class {

    // declaration
    // class person {

    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }

    // method 
    result() {
        return this.firstname + " " + this.lastname
    }
}
// calling class
var per = new person("Abc", "Xyz")
console.log(per.result());

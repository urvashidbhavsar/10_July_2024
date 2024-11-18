class person {
    constructor() {
        person.newperson("Hello")
    }
    static newperson() {
        console.log("1st static method invoke");
    }
    static newperson(newmsg) {
        console.log(newmsg);
    }
}
var p = new person()

// not need to create object when use static
// person.newperson()
// person.newperson1()
function person(fname) {
    this.fname = fname
    throw new Error("You cant create instance of abstract class")
}
person.prototype.getName = function () {
    return this.fname;
}
function stud(studname) {
    return this.studname = studname
}
stud.prototype = Object.create(person.prototype)
var s = new stud("Pooja");
console.log(s.studname);



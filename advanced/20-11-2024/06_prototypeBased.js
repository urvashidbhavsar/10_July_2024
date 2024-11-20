function newPerson(fname, lname) {
    this.fname = fname;
    this.lname = lname;
}
newPerson.prototype.getFullname = function () {
    return this.fname + " " + this.lname
}

function newEmp(sal) {
    this.sal = sal;
}

// create instance of person
var per = new newPerson("Abc", "Xyz");
// inheritance as per prototype based
newEmp.prototype = per;
var emp = new newEmp(25000);
console.log(emp.getFullname() + " " + emp.sal);

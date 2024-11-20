// person=> parent
// it may b student, employee or family member => child

// class person {
//     constructor(fname, lname) {
//         this.fname = fname;
//         this.lname = lname;
//     }
// }
class person {
    constructor() {
        this.fname = "Abc";
        this.lname = "xyz";
    }
}

class employee extends person {
    constructor(sal) {
        super();
        this.sal = sal;
    }
}

class student extends person {
    constructor(deg) {
        super();
        this.deg = deg
    }
}
// access employee class 
var emp1 = new employee(35000);
var { fname, lname, sal } = emp1

var stud1 = new student("BCA");
var { fname, lname, deg } = stud1

console.log(fname + " " + lname + " " + sal);
console.log(fname + " " + lname + " " + deg);



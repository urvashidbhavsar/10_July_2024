// if create function pass arg
// function emp(id, name) {
//     this.id = id;
//     this.name = name;

// }
class emp {
    constructor(id, name) {
        this.id = id;
        this.name = name;

        Object.defineProperty(this, id, {
            // get: function () {
            //     return this.id;
            // },
            set: function (id) {
                this.id = id;
            }
        });
        Object.defineProperty(this, name, {
            // get: function () {
            //     return this.name;
            // },
            set: function (name) {
                this.name = name;
            }
        });
    }
}

var e = new emp(1, "Abc")
console.log(e.id + " " + e.name);


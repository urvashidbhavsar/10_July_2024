let fur = {
    brand: "Cello",
    price: 900,
}
// do not use arrow function inside an object.
let fullDetails = {
    details: function () {
        return this.brand + " " + this.price
    }
}
console.log(fullDetails.details.apply(fur));
console.log(fullDetails.details.call(fur));


var car = {
    brand: "mg",
    price: "2200000",

    fullDetails: function () {
        return this.brand + " " + this.price;
    }
}
var c = car.fullDetails();
console.log(c);

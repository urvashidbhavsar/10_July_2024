var person = {
    firstname: "Urvashi",
    lastname: "Bhavsar",
    Address: "Surat",
    mobileNo: 9876543210,
    doj: "02-07-2024"
}
console.log(person);
console.log(person.firstname + " " + person.lastname);


for (const per in person) {
    if (Object.prototype.hasOwnProperty.call(person, per)) {
        // const element = object[key];
        console.log(`${per} =>  ${person[per]}`);
    }
}
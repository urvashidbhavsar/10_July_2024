class parent {
    display() {
        console.log("Parent class Invoke");
    }
}
class child extends parent {
    display() {
        console.log("Child class Invoke");
    }
}
var ch = [new parent(), new child()]
ch.forEach(all => {
    all.display();
})
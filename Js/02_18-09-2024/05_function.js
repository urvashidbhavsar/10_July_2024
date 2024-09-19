
// without argument
function myFunc() {
    console.log("<div>Hello world</div>");
}
// call the function
myFunc();
myFunc();

// pass argument
function message(msg) {
    if (msg) {
        console.log(msg)
    } else {
        console.log("error")
    }
}

function hello(name) {
    return `Hi ! ${name}`;
}
function display_msg(appriciate, msg, name) {
    console.log(`${appriciate(name)}, ${msg}`);
}
display_msg(hello, "Welcome to our Home", "Urvashi");

// ================================== 
function multiply(a, b) {
    return a * b;
}
function higherFunc(multiply) {
    // console.log(multiply);
    console.log(multiply(5, 5));
}
// value access as a parameter/argu
higherFunc(multiply)

// value access as a function
// higherFunc(multiply(5,5))



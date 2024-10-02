var str = "Hello", ptn = /^[a-z]*$/i;
if (str.match(ptn)) {
    console.log("Match");
} else {
    console.log("Not Match");
}

var num = 1233, ptn = /^[0-9]*$/
if (ptn.test(num)) {
    console.log("Match");
} else {
    console.log("Not Match");
}

var line = "this is js lang"
var rep = line.replace(/[a]/, "0000");
console.log(line);
console.log(rep);


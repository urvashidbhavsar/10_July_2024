var mypromise = new Promise((resolve, reject) => {
    var sum = 5 + 6;
    if (sum == 10) {
        resolve("addition task completed")
    } else {
        reject("addition task not completed")
    }
})
    .then(resolve => console.log(resolve))
    .catch(reject => console.log(reject))
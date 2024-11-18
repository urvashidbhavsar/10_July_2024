const num = [1, 2, 3, 4, 5];
const sum = num.reduce((total, curr) => {
    return total + curr;
}, 0)
console.log(sum);

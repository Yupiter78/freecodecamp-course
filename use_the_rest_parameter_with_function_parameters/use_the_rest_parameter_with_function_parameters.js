const sum = (...args) => args.reduce((a, b) => a + b, 0);

console.log(sum(0,1,2)); // should be 3
console.log(sum(1,2,3,4)); //should be 10
console.log(sum(5)); //should be 5
console.log(sum()); //should be 0
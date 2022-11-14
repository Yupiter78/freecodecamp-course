function removeFirstTwo(list) {
    // Only change code below this line
    const [, , ...arr] = list;
    // Change this line
    // Only change code above this line
    return arr;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

console.log(sourceWithoutFirstTwo);
console.log(removeFirstTwo([1, 2, 3, 4, 5])); // should be [3, 4, 5]

function removeFirstTwo_2([, , ...arr]) {
    return arr;
}

const source_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo_2 = removeFirstTwo(source_2);

console.log(sourceWithoutFirstTwo_2);
console.log(removeFirstTwo_2([1, 2, 3, 4, 5])); // should be [3, 4, 5]
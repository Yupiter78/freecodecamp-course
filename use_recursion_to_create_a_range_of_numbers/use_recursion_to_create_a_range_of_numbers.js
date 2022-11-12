function rangeOfNumbers(startNum, endNum) {
    return (startNum > endNum) ? [] : [...rangeOfNumbers(startNum, endNum - 1), endNum];
}

// Solution 1
function rangeOfNumbers_1(startNum, endNum) {
    if (endNum < startNum) {
        return [];
    } else {
        const numbers = rangeOfNumbers(startNum, endNum - 1);
        numbers.push(endNum);
        return numbers;
    }
}
// Solution 2
function rangeOfNumbers_2(startNum, endNum) {
    return endNum < startNum
        ? []
        : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
}
// Solution 3
function rangeOfNumbers_3(startNum, endNum) {
    return endNum < startNum
        ? []
        : [...rangeOfNumbers(startNum, endNum - 1), endNum];
}

console.log(rangeOfNumbers(1, 5));
console.log(rangeOfNumbers(6, 9));
console.log(rangeOfNumbers(4, 4));

console.log(rangeOfNumbers_1(6, 9));
console.log(rangeOfNumbers_2(6, 9));
console.log(rangeOfNumbers_3(6, 9));
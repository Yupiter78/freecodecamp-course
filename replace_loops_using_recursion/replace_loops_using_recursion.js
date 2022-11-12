function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
}

function multiply_recursion(arr, n) {
    if (n <= 0) {
        console.log(`n = ${n}`);
        return 1;
    } else {
        console.log(`${n} - 1 = ${n - 1}`);
        console.log(`multiply_recursion([${arr}], ${n - 1}) * ${arr[n - 1]}`)
        return multiply_recursion(arr, n - 1) * arr[n - 1];
    }
}

const testArray = [2, 3, 4, 5, 6];

console.log(multiply(testArray, 3));
let testDiv = document.querySelector(".display");
let testDiv_two = document.querySelector(".display_two");

testDiv.textContent = `${multiply(testArray, 3)}`;
testDiv_two.textContent = `${multiply_recursion(testArray, 3)}`

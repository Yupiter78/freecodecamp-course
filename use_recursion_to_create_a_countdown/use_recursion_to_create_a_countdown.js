// Only change code below this line
function countdown(n){
    if (n < 1) {
        return [];
    } else {
        let resultArray = countdown(n - 1);
         resultArray.push(n);
         return resultArray.sort((a, b) => b - a);
    }
}

function countdown_1(n) {
    if (n < 1) {
        return [];
    } else {
        const arr = countdown(n - 1);
        arr.unshift(n);
        return arr;
    }
}

function countdown_2(n) {
    if (n < 1) {
        return [];
    } else {
        const arr = countdown(n - 1);
        arr.splice(0, 0, n);
        return arr;
    }
}

function countdown_3(n){
    return n < 1 ? [] : [n].concat(countdown(n - 1));
}

function countdown_4(n){
    return n < 1 ? [] : [n, ...countdown(n - 1)];
}
// Only change code above this line


console.log(countdown(-1) );
console.log(countdown(10) );
console.log(countdown_1(10) );
console.log(countdown_2(10) );
console.log(countdown_3(10) );
console.log(countdown_4(10) );
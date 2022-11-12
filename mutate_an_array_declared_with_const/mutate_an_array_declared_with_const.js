const s = [5, 7, 2];
function editInPlace() {
    // Only change code below this line

    // Using s = [2, 5, 7] would be invalid

     s.splice(0, 3, 2, 5, 7);
     return s;

    // Only change code above this line
}
console.log(editInPlace());

const newS = [...s].reverse();
console.log("newS:", newS);

function editInPlace_2() {
    "use strict";
    newS[0] = 2;
    newS[1] = 5;
    newS[2] = 7;
    return newS;
}
console.log(editInPlace_2());
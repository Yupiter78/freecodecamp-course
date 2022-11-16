const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList({failure}) {
    // Only change code below this line
    return failure.map((item) =>`<li class="text-warning">${item}</li>`);
    // Only change code above this line
}

console.log(makeList(result));


function makeList_2(arr) {
    "use strict";
    // change code below this line
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    // change code above this line
    return failureItems;
}

const failuresList_2 = makeList_2(result.failure);
console.log({failuresList_2});


function makeList_3(arr) {
    "use strict";
    // change code below this line
    const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);
    // change code above this line
    return failureItems;
}
const failuresList_3 = makeList_3(result.failure);

console.log({failuresList_3});
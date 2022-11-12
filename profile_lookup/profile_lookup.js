// Setup
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    // Only change code below this line
    let person = contacts.find((item) => item.firstName === name);

        if (person) {
            return person[prop] ? person[prop] : "No such property";
        }
    return "No such contact";
    // Only change code above this line
}

console.log(lookUpProfile("Akira", "likes"));

console.log(lookUpProfile("Kristian", "lastName")); //should return the string Vos
console.log(lookUpProfile("Sherlock", "likes")); //should return ["Intriguing Cases", "Violin"]
console.log(lookUpProfile("Harry", "likes")); //should return an array
console.log(lookUpProfile("Bob", "number")); //should return the string No such contact
console.log(lookUpProfile("Bob", "potato")); //should return the string No such contact
console.log(lookUpProfile("Akira", "address")); //should return the string No such property
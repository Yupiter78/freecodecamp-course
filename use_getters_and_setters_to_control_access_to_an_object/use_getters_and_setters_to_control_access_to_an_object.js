class Book {
    constructor(author) {
        this._author = author;
    }
    // getter
    get writer() {
        return this._author;
    }
    // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);


// Only change code below this line
class Thermostat {
    constructor(temperatureInF) {
        this._temperatureInC = 5/9 * (temperatureInF - 32)
    }

    get temperature() {
        return this._temperatureInC;
    }

    set temperature(updateTemperature) {
        this._temperatureInC = updateTemperature;
    }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
console.log(thermos);

let temp = thermos.temperature; // 24.44 in Celsius
console.log({temp});
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

console.log({temp});

class Thermostat_2 {
    constructor(fahrenheit) {
        this.fahrenheit = fahrenheit;
    }

    get temperature() {
        return (5 / 9) * (this.fahrenheit - 32);
    }

    set temperature(celsius) {
        this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
}

const thermos_2 = new Thermostat_2(76); // Setting in Fahrenheit scale
console.log(thermos_2);

let temp_2 = thermos_2.temperature; // 24.44 in Celsius
console.log({temp_2});
thermos_2.temperature = 26;
temp_2 = thermos_2.temperature; // 26 in Celsius

console.log({temp_2});
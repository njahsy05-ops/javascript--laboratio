/* Lösning till Uppgift 9.skriver ut information om personer och kontrollerar om de är myndiga Av Njah Hmami, 2026 */
"use strict";

// Skapar en array med personer
const people = [
    {
        name: "Lana",
        age: 22,
        city: "Skövde"
    },
    {
        name: "Ali",
        age: 35,
        city: "Götenborg"
    },
    {
        name: "Rima",
        age: 15,
        city: "Borås"
    }
];

// Skriver ut personens namn och stad och kontrollerar om personen är myndig
function printPerson(person) {
    if (person.age >= 18) {
        console.log(person.name + " bor i " + person.city + " och är myndig.");
    } else {
        console.log(person.name + " bor i " + person.city + " och är inte myndig.");
    }
}

// Går igenom alla personer i arrayen och anropar funktionen
for (let i = 0; i < people.length; i++) {
    printPerson(people[i]);
}
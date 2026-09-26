/* Lösning till Uppgift 9. Av Njah Hmami, 2026 */
"use strict";

// Skapar en array med personer
const people = [
    {
        name: "Anna",
        age: 30,
        city: "Sundsvall"
    },
    {
        name: "Sofie",
        age: 45,
        city: "Hudiksvall"
    },
    {
        name: "Markus",
        age: 16,
        city: "Härnösand"
    }
];

// Funktion som skriver ut information om en person
function printPerson(person) {
    if (person.age >= 18) {
        console.log(person.name + " bor i " + person.city + " och är myndig.");
    } else {
        console.log(person.name + " bor i " + person.city + " och är inte myndig.");
    }
}

// Går igenom alla personer i arrayen
for (let i = 0; i < people.length; i++) {
    printPerson(people[i]);
}
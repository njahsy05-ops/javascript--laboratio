/* Lösning till Uppgift 7. Av Njah Hmami, 2026 */
"use strict";

// Skapar en array med sex tal
const numbers = [5, 7, 10, 4, 8, 8];

// Funktion som räknar ut summan av talen i en array
function calculateSum(array) {
    let sum = 0;

    // Går igenom alla tal i arrayen
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }

    return sum;
}

// Anropar funktionen och skriver ut resultatet
console.log("Summan är " + calculateSum(numbers));
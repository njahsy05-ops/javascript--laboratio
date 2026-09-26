/* Lösning till Uppgift 3. Av Njah Hmami, 2026 */
"use strict";

// Skapar en variabel som innehåller personens ålder
const age = 21;

// Kontrollerar åldern och skriver ut rätt kategori
if (age < 18) {
    console.log("Barn");
} else if (age <= 64) {
    console.log("Vuxen");
} else {
    console.log("Pensionär");
}
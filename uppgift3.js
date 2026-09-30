/* Lösning till Uppgift 3. skriver ut ålderskategori beroende på ålder.Av Njah Hmami, 2026 */
"use strict";

// olika åldrar att testa, även gränserna 17, 18, 64 och 65 
const testAge = [17, 18, 64, 65];

// Kontrollerar åldern och skriver ut rätt kategori
for (const age of testAge) {
    if (age < 18) {
        console.log(age + " är ett barn");
    } else if (age <= 64) {
        console.log(age + " är en vuxen");
    } else {
        console.log(age + " är en pensionär");
    }
}
/* Lösning till Uppgift 3. skriver ut ålderskategori beroende på ålder.Av Njah Hmami, 2026 */
"use strict";

// olika åldrar att testa, även gränserna 17,18,64och 65 
const testAge = [17, 18, 64, 65];

// Kontrollerar åldern och skriver ut rätt kategori
for (const age of testAge) {
    if (age < 18) {
        console.log("Barn");
    } else if (age <= 64) {
        console.log("Vuxen");
    } else {
        console.log("Pensionär");
    }
}
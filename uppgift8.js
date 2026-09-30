/* Lösning till Uppgift 8. skapar ett bokobjekt och skriver ut information om boken Av Njah Hmami, 2026 */
"use strict";

// Skapar ett objekt som representerar en bok
const book = {
    title: "Harry potter",
    author: "J.K. Rowling",
    publicationYear: 1997
};

// Funktion som skriver ut information om en bok
function printBook(bookObject) {
    console.log("Titel: " + bookObject.title);
    console.log("Författare: " + bookObject.author);
    console.log("Utgivningsår: " + bookObject.publicationYear);
}

// Anropar funktionen
printBook(book);
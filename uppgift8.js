/* Lösning till Uppgift 8. Av Njah Hmami, 2026 */
"use strict";

// Skapar ett objekt som representerar en bok
const book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    publicationYear: 1937
};

// Funktion som skriver ut information om en bok
function printBook(bookObject) {
    console.log("Titel: " + bookObject.title);
    console.log("Författare: " + bookObject.author);
    console.log("Utgivningsår: " + bookObject.publicationYear);
}

// Anropar funktionen
printBook(book);
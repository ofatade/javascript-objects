// Task 1: Constructor function for the Book object
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// Task 2: Method to display book information
Book.prototype.displayInfo = function() {
    console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
};

// Task 3: Function to add a new book to the library

// Array to store book objects
let library = [];

function addBook(title, author, pages) {
    const newBook = new Book(title, author, pages);
    library.push(newBook);
}

function searchByTitle(title) {
    return library.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
}

function searchByAuthor(author) {
    return library.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
}

// Task 4: Function to filter books with more than 100 pages
function filterBooksByPageCount(pageCount) {
    return library.filter(book => book.pages > pageCount);
}

// Function to add "Title: " and "Author: " to the book's title and author properties
function formatBookDetails() {
    return library.map(book => ({
        title: "Title: " + book.title,
        author: "Author: " + book.author,
        pages: book.pages
    }));
}

// Adding books to the library
addBook("How to get Wealth", "Rev. Deji Olabode", 98);
addBook("Bad Wooman of the Bible", "Dr. Seun Olabode", 100);
addBook("1984", "George Orwell", 328);
addBook("The Catcher in the Rye", "J.D. Salinger", 214);
addBook("Animal Farm", "George Orwell", 112);

// Displaying books in the library
console.log("Books in the library:");
library.forEach(book => book.displayInfo());

// Searching for books by title
console.log("\nSearch results for '1984':");
searchByTitle("1984").forEach(book => book.displayInfo());

// Searching for books by author
console.log("\nSearch results for 'George Orwell':");
searchByAuthor("George Orwell").forEach(book => book.displayInfo());

// Filtering books with more than 100 pages
console.log("\nBooks with more than 100 pages:");
filterBooksByPageCount(100).forEach(book => book.displayInfo());

// Formatting book details
console.log("\nFormatted book details:");
formatBookDetails().forEach(book => console.log(book));

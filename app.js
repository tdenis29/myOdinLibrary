//Another OOP library!
let myLibrary = [];

class Book {
    constructor(title, author, pages, read, _logInfo) {
            this.title = title,
            this.author = author,
            this.pages = pages,
            this.read = read,
            this.logInfo = function () {
            console.log(this.title, this.author, this.pages, this.read);
        };
    }
}
//add book to myLibrary array
function addBook(){

}
//remove book from array
function removeBook(){

}
//toggles read status on book prototype inheritiance
function readBook(){

}
//loop through myLibrary array to display each book
function dispalyLibrary(){

}
//SET books to local sotrage 
function saveBook(){

}
// GET books from local storage
function loadBooks(){

}
//book instance
const book1 = new Book("The Hobbit", "J.R.R Tolkein", "295", "Yes");

console.log(book1.logInfo());

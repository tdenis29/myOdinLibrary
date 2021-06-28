const modalClose = document.getElementById('modalClose');
const overlay = document.getElementById('overlay');
const addNewBook = document.getElementById('addNewBook');
const send = document.getElementById('send');
const form = document.getElementById("form");
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
//addNewBook to open modal window
addNewBook.addEventListener('click', (e) => {
    overlay.style.display = 'block';
})
//add book to myLibrary array after form is filled onsubmit

form.addEventListener('submit', function addBookToLibrary(e){
    e.preventDefault();
    let bookTitle = document.getElementById('bookTitle').value;
    let bookAuthor = document.getElementById('bookAuthor').value;
    let bookPages = document.getElementById('bookPages').value;
    let bookRead = document.getElementById('read').value;
    if(bookTitle !== "" &&
        bookAuthor !== ""  && 
        bookPages !== 0 || bookPages !== ""){
            let book = new Book(bookTitle, bookAuthor, bookPages, bookRead);
            console.log(book)
            myLibrary.push(book)
            overlay.style.display = "none";
        }
        console.log(myLibrary)
    })


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
//Modal Close
modalClose.addEventListener('click', () => {
    overlay.style.display = "none"
    });
//book instance


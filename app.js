const modalClose = document.getElementById('modalClose');
const overlay = document.getElementById('overlay');
const addNewBook = document.getElementById('addNewBook');
const send = document.getElementById('send');
const form = document.getElementById("form");

//Another OOP library!
let myLibrary = [
    // {
    // title: "The Hobbit",
    // author: "JRR Tolkien",
    // pages: 295,
    // read: "on",
    // },
    // {
    // title: "Dune",
    // author: "Herbert",
    // pages: 500,
    // read: "off",
    // },
    // {
    // title: "Great Expectations",
    // author: "Charles Dickens",
    // pages: 650,
    // read: "on",
    // },
    // {
    // title: "50 Shades Of Grey",
    // author: "Who Cares",
    // pages: 10,
    // read: "off",
    // }
];

class Book {
    constructor(title, author, pages, read,) {
            this.title = title,
            this.author = author,
            this.pages = pages,
            this.read = read,
            this.readBookStatus = function () {
                console.log(this); 
        };
    }
}
window.addEventListener("onload", dispalyLibrary());
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
    if(bookTitle !== "" &&
        bookAuthor !== ""  && 
        bookPages !== 0 || bookPages !== ""){
            let book = new Book(bookTitle, bookAuthor, bookPages);
            myLibrary.push(book)
            overlay.style.display = "none";
        }
        //display new book after myLibrary.push()
        dispalyLibrary();
        //reset form after preventdefault()
        form.reset();
        //calls get cards for lexical reference to remove btns
        let usetheseBtn = getCards();
        //apply event handler to newly created buttons
        usetheseBtn.forEach(applyEvent);
    });


//this function gets current button elements and returns as a variable to pass to applyEvent()
function getCards(){
let removeBtns = document.querySelectorAll('.remove');
Array.from(removeBtns);
return removeBtns;
}
function applyEvent(){
    let usetheseBtn = getCards();
    //mylibSplice is a named function for this reference on clicked button to remove with parentNode
    usetheseBtn.forEach(btn => {btn.addEventListener('click', function mylibSplice() {
        pos = btn.dataset.index;
        parseInt(pos);
        myLibrary.splice(pos, 1);
        this.parentNode.parentNode.remove();
})})};

//loop through myLibrary array to display each book
function dispalyLibrary(){
    const bookContainer = document.getElementById("book-container");
    let bookHTML = "";
    myLibrary.forEach((book, index) => {
        let title = book.title;
        let author = book.author;
        let pages = book.pages;
        let read = book.read;
        bookHTML += `
        <div class="book-card" data-index="${index}">
        <h3>${title}</h3>
            <p>${author}</p>
                <p>${pages}</p>
                <div class="check-con">
                    <label for="read">Read?</label>
                    <input id="read" type="checkbox">
                </div>
                <div class="book-button-con">
                    <button onclick="removeBook()">Edit</button>
                    <button class="remove">Remove</button>
                </div>  
            </div>   
                `               
    });
    bookContainer.innerHTML = bookHTML;
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



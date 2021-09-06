const modalClose = document.getElementById('modalClose');
const overlay = document.getElementById('overlay');
const addNewBook = document.getElementById('addNewBook');
const send = document.getElementById('send');
const form = document.getElementById("form");
const localStorage = window.localStorage;

let myLibrary = [];

class Book {
    constructor( title, author, pages, read) {
            this.title = title,
            this.author = author,
            this.pages = pages,
            this.read = read
    }

        };

// window.addEventListener("onload"); //loadbooks);
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
    let bookRead = document.getElementById("readStatus").checked;
    if(bookTitle !== "" &&
        bookAuthor !== ""  &&
        bookPages !== 0){
            let book = new Book(bookTitle, bookAuthor, bookPages, bookRead);
            myLibrary.push(book);
            overlay.style.display = "none";
            saveBook()
        } else if (bookPages === ""){

        }
        //display new book after myLibrary.push()
        dispalyLibrary(myLibrary)
        //reset form after preventdefault()
        form.reset();
    });

document.getElementById("book-container").addEventListener('click', (button) => {
    button.stopPropagation()
    if(button.target.nodeName === "BUTTON"){
        let pos = button.target.dataset.index
        parseInt(pos);
        let removed = myLibrary.splice(pos, 1);
        saveBook();
        button.target.parentNode.parentNode.remove();
} else if (button.target.nodeName == "INPUT"){
        let pos = button.target.dataset.index
        let update = myLibrary[pos];
        if(!update.read){
            update.read = true;
        } else {
            update.read = false;
        }
        saveBook();
}
})
//loop through myLibrary array to display each book
function dispalyLibrary(arr){
    const bookContainer = document.getElementById("book-container");
    let bookHTML = "";
    arr.forEach((book, index) => {
        let title = book.title;
        let author = book.author;
        let pages = book.pages;
        let read = book.read;
        bookHTML += `
        <div class="book-card" id="bookCard">
        <h3 id="bookTitle">${title}</h3>
            <p>${author}</p>
                <p>${pages}</p>
                <div class="check-con">
                    <label for="read">Read?</label>
                    `;if(read === true){
                       bookHTML += `<input id="checkMe" data-index="${index}" type="checkbox" checked>`
                    }else{
                       bookHTML += `<input id="checkMe" data-index="${index}" type="checkbox">`
                    }
                        bookHTML += `
                        </div>
                        <div class="book-button-con">
                            <button data-index="${index}" class="remove">Remove</button>
                        </div>
                    </div> `;

    });
    bookContainer.innerHTML = bookHTML;
};
//SET books to local sotrage

function saveBook(){
   localStorage.setItem('theLibrary', JSON.stringify(myLibrary))
}

// GET books from local storage
function loadBooks(){
    if(localStorage !== true){
        let savedLibrary = JSON.parse(localStorage.getItem("theLibrary") || "[]");
        dispalyLibrary(savedLibrary);
        myLibrary = savedLibrary;

    }else{
        return
    }
}

loadBooks();


//Modal Close
modalClose.addEventListener('click', () => {
    overlay.style.display = "none"
    });





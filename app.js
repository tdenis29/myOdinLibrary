//Another OOP library!
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
const book1 = new Book("The Hobbit", "J.R.R Tolkein", "295", "Yes");

console.log(book1.logInfo());

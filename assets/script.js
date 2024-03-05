const modal = document.querySelector("dialog");
const addBtn = document.querySelector("#add-btn");
const closeBtn = document.querySelector("#close-btn");
const myLibrary = [];

function Book(title, author, pages,) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readed = readed;
  this.info = function () {
    const isReadedInfo = readed ? "was read" : "not read yet";

    return `${this.title} by ${this.author}, ${this.pages} pages, ${isReadedInfo}`
  }
}

function addBookToLibrary() {
  // do stuff here
}

addBtn.addEventListener("click", () => {
  modal.showModal()
})

closeBtn.addEventListener("click", () => {
  modal.close()
})

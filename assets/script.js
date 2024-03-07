const modal = document.querySelector("dialog");
const addBookBtn = document.querySelector("#add-book");
const openModalBtn = document.querySelector("#add-btn");
const submitBtn = document.querySelector("#submit-btn");

const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const checkReaded = document.querySelector("#read");


const myLibrary = [];

function Book(title, author, pages, readed) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readed = readed;
}

function addBookToLibrary() {
  let newBook = new Book(inputTitle.value, inputAuthor.value, inputPages.value.toString(), checkReaded.checked);

  console.log(newBook)
}

function validatingInput() {

}

openModalBtn.addEventListener("click", () => {
  modal.showModal();
})

submitBtn.addEventListener("click", () => {
  console.log(addBookToLibrary());
  modal.close();
})

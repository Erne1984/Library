const modal = document.querySelector("dialog");
const addBookBtn = document.querySelector("#add-book");
const openModalBtn = document.querySelector("#add-btn");
const submitBtn = document.querySelector("#submit-btn");

const containerCards = document.querySelector(".cards-container");
const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const checkReaded = document.querySelector("#read");

class Book{
  constructor(title, author, pages, readed){
    this.title = title;
    this.author = author;
    this.page = pages;
    this.readed = readed;;
  }
}

const myBooks = [
  new Book("Metamorphosis", "Franz Kafka", 82, true),
  new Book("O Alienista", "Machado de Assis", 80, true),
  new Book("O Cavaleiro da Esperança", "Jorge Amado", 366, false),
];

function addBookToLibrary() {
  let newBook = new Book(inputTitle.value, inputAuthor.value, inputPages.value.toString(), checkReaded.checked);

  let card = document.createElement("div");

  card.classList.add("card");

  for (let attribute in newBook) {
    let contentDiv = document.createElement("div");

    if (attribute === "readed") {
      contentDiv.textContent = newBook[attribute] ? "Read" : "Not Read";
    } else {
      contentDiv.textContent = newBook[attribute];
    }

    contentDiv.classList.add(attribute);
    card.appendChild(contentDiv);
  }

  eraseFields();

  myBooks.push(newBook);

  containerCards.appendChild(card);
}

function validatingInput() {

}

function eraseFields() {
  inputTitle.textContent = "";
  inputAuthor.textContent = "";
  inputPages.textContent = "";
  checkReaded.checked = false;
}

function fillDataBook() {
  for (let book of myBooks) {
    let card = document.createElement("div");
    card.classList.add("card");

    for (let attribute in book) {
      let contentDiv = document.createElement("div");

      if (attribute === "readed") {
        contentDiv.textContent = book[attribute] ? "Read" : "Not Read";
      } else {
        contentDiv.textContent = book[attribute];
      }

      contentDiv.classList.add(attribute);
      card.appendChild(contentDiv);
    }

    containerCards.appendChild(card);
  }
}

fillDataBook()

openModalBtn.addEventListener("click", () => {
  modal.showModal();
})

submitBtn.addEventListener("click", () => {
  addBookToLibrary()
  modal.close();
})
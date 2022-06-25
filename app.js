"use strict";

function showForm(body, formContainer, form, overall) {
  body.style.overflow = "hidden";
  formContainer.style.display = "flex";
  form.style.display = "flex";
  overall.style.display = "block";
}

function closeform(body, formContainer, form, overall) {
  body.style.overflow = "auto";
  formContainer.style.display = "none";
  form.style.display = "none";
  overall.style.display = "none";
}

function Book(title, author, page, read) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read;
}

let library = [];
let newbook;

function addBookToLibrary() {
  newbook = new Book(title.value, author.value, page.value, checkbox.checked);
  library.push(newbook);
  setData();
  render();
  form.reset();
}

function setStyle(book) {
  let main = document.querySelector(".main");
  let div = document.createElement("div");
  div.classList.add("container-piece");
  main.appendChild(div);

  let title = document.createElement("p");
  title.classList.add("title");
  title.textContent = `${book.title}`;
  div.appendChild(title);

  let author = document.createElement("p");
  author.textContent = `${book.author}`;
  div.appendChild(author);

  let page = document.createElement("p");
  page.textContent = `${book.page}`;
  div.appendChild(page);

  let read = document.createElement("button");
  read.classList.add("readbutton");
  if (book.read == true) {
    read.textContent = "read";
    read.style.backgroundColor = "rgba(145, 255, 135, 1)";
  } else {
    read.textContent = "unread";
    read.style.backgroundColor = "rgba(255, 142, 135, 1)";
    read.style.fontSize = "1.2rem";
  }
  div.appendChild(read);

  read.addEventListener("click", () => {
    book.read = !book.read;
    setData();
    render();
  });

  let remove = document.createElement("button");
  remove.classList.add("remove-button");
  remove.textContent = "remove";
  div.appendChild(remove);

  remove.addEventListener("click", () => {
    library.splice(library.indexOf(book), 1);
    setData();
    render();
  });
}

function render() {
  let books = document.querySelectorAll(".container-piece");
  books.forEach((book) => main.removeChild(book));

  for (let i = 0; i < library.length; i++) {
    setStyle(library[i]);
  }
}

function setData() {
  localStorage.setItem("mylibrary", JSON.stringify(library));
}

function restoreData() {
  if (!localStorage.mylibrary) {
    render();
  } else {
    let objects = JSON.parse(localStorage.getItem("mylibrary"));
    library = objects;
    render();
  }
}

restoreData();

const body = document.querySelector(".body");
const formContainer = document.querySelector(".container-form");
const form = document.querySelector(".form");
const title = document.querySelector(".title");
const author = document.querySelector(".author");
const page = document.querySelector(".page");
const readButton = document.querySelector(".readbutton");
const checkbox = document.querySelector(".checkbox");
const submit = document.querySelector(".submit");
const overall = document.querySelector(".overall");
const main = document.querySelector(".main");
const add = document.querySelector(".add");

add.addEventListener("click", () => {
  showForm(body, formContainer, form, overall);
});

overall.addEventListener("click", () => {
  closeform(body, formContainer, form, overall);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary();
  closeform(body, formContainer, form, overall);
});

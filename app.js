// in the name of GOD

const showForm = function (formContainer, form, overall, body, addForm) {
  formContainer.style.display = "flex";
  form.style.display = "flex";
  overall.style.display = "block";
  body.style.overflow = "hidden"
};

const closeForm = function (formContainer, form, overall, body) {
  formContainer.style.display = "none";
  form.style.display = "none";
  overall.style.display = "none";
  body.style.overflow = "auto"
};

const addSubmit = document.querySelector(".add");
const formContainer = document.querySelector(".container-form");
const form = document.querySelector(".form");
const overall = document.querySelector(".overall");
const body = document.querySelector(".body");
const addForm = document.querySelector(".add")

addSubmit.addEventListener("click", () => {
  showForm(formContainer, form, overall, body, addForm);
});

overall.addEventListener("click", () => {
  closeForm(formContainer, form, overall, body);
});

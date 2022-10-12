let input = document.querySelector(".input");
let container = document.querySelector(".container");
let addBtn = document.querySelector(".addButton");

addBtn.addEventListener("click", () => {
  inputValidation();
});

let inputValidation = () => {
  if (input.value === "") {
    alert("Provide a valid input");
  } else {
    acceptData();
  }
};

let data = {};

let acceptData = () => {
  data["text"] = input.value;
  createTodo();
};

let createTodo = () => {
  container.innerHTML += `
  <div class="item">
  <span class="item_input">${data.text}</span>
  <button onClick="editTodo(this)" class="editButton">EDIT</button>
  <button onClick="deleteTodo(this)" class="deleteButton">DELETE</button>
  </div>
  `;
  input.value = "";
};

let deleteTodo = (e) => {
  e.parentElement.remove();
};

let editTodo = (e) => {
  input.value = e.previousElementSibling.innerHTML;
  e.parentElement.remove();
};

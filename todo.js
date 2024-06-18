// Retrieve the todo list from local storage
let todoStr = localStorage.getItem('todoItem');

// Initialize the todo list as an array
let todoList = todoStr ? JSON.parse(todoStr) : [];

// Ensure todoList is an array
if (!Array.isArray(todoList)) {
    todoList = [];
}

// Display existing items
displayItems();

function addTodo() {
  // Get input values
  let inputElement = document.querySelector('#todo-input');
  let todoText = inputElement.value.trim();

  let dateElement = document.querySelector('#todo-date');
  let todoDate = dateElement.value.trim();

  // Validate input values
  if (!todoText || !todoDate) {
    alert("Both text and date are required.");
    return;
  }
  
  // Create a new todo item
  let todoItem = {
    Text: todoText,
    Date: todoDate,
  };

  // // Log the current todoList before pushing
  // console.log('Before push, todoList:', todoList);

  // Add the new item to the list
  todoList.push(todoItem);

  // // Log the current todoList after pushing
  // console.log('After push, todoList:', todoList);

  // Save the updated list to local storage
  localStorage.setItem('todoItem', JSON.stringify(todoList));

  // Clear the input fields
  inputElement.value = "";
  dateElement.value = "";

  // Display the updated list
  displayItems();
}

function displayItems() {
  // Get the container element
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';

  // Generate HTML for each item in the list
  for (let i = 0; i < todoList.length; i++) {
    newHtml += `
        <span>${todoList[i].Text}</span>
        <span>${todoList[i].Date}</span>
        <button class="todo-delete" onclick="deleteTodoItem(${i})">Delete</button>
    `;
  }

  // Update the container's HTML
  containerElement.innerHTML = newHtml;
}

function deleteTodoItem(index) {
  // Remove the item from the list
  todoList.splice(index, 1);

  // Save the updated list to local storage
  localStorage.setItem('todoItem', JSON.stringify(todoList));

  // Display the updated list
  displayItems();
}

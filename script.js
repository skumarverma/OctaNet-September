// JavaScript for managing the To-Do List

// Selecting necessary DOM elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Function to create a new task element
function createTodoItem(taskText) {
  const li = document.createElement('li');
  li.innerHTML = `
    ${taskText}
    <button class="remove-btn">Remove</button>
  `;
  
  // Adding event listener to remove the task
  li.querySelector('.remove-btn').addEventListener('click', function() {
    todoList.removeChild(li);
  });
  
  return li;
}

// Event listener for form submission
todoForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form from reloading page
  
  const taskText = todoInput.value;
  if (taskText) {
    const todoItem = createTodoItem(taskText);
    todoList.appendChild(todoItem);
    todoInput.value = ''; // Clear the input after adding
  }
});

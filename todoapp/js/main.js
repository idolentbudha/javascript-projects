// Returns checkbox icon based on task completion status
var getTaskIcon = (value) => {
  return value ? "✅" : "⬜️";
};
// Sample initial task list (can be replaced by saved tasks from localStorage)
var todoList = [
  { id: Date.now(), task: "Task 1", isChecked: true },
  { id: Date.now() + 1, task: "Task 2", isChecked: false },
];

//event handler
window.onload = function () {
  // Render initial list
  renderTodoList();

  // Set up event listeners for input fields to capture task name changes
  document.getElementById("Todo_List").addEventListener("input", (event) => {
    if (
      event.target.tagName === "INPUT" &&
      event.target.hasAttribute("data-id")
    ) {
      handleInputChange(event);
    }
  });

  document
    .getElementById("Completed_List")
    .addEventListener("input", (event) => {
      if (
        event.target.tagName === "INPUT" &&
        event.target.hasAttribute("data-id")
      ) {
        handleInputChange(event);
      }
    });

  // Load tasks from localStorage if available
  if (localStorage.getItem("todoList")) {
    todoList = JSON.parse(localStorage.getItem("todoList"));
    renderTodoList();
  }
};

// Update task content based on input field changes
function handleInputChange(event) {
  const element = event.target;
  const taskId = parseInt(element.getAttribute("data-id"));
  const todo = todoList.find((todo) => todo.id === taskId);
  if (todo) {
    todo.task = element.value;
    console.log(todoList);
  }
}

// Render todo and completed tasks into their respective lists
function renderTodoList() {
  var TODO_LIST_UL = document.getElementById("Todo_List");
  var COMPLETED_TODO_LIST_UL = document.getElementById("Completed_List");
  TODO_LIST_UL.innerHTML = "";
  COMPLETED_TODO_LIST_UL.innerHTML = "";
  todoList.forEach((todo) => {
    if (!todo.isChecked) {
      TODO_LIST_UL.innerHTML += generateListElement(todo);
    } else {
      COMPLETED_TODO_LIST_UL.innerHTML += generateListElement(todo);
    }
  });

  animateNewItems();
  updateCompleteTaskCount();
}

// Generate a single list item element for a given task
function generateListElement(todo) {
  return `<li class="animate-in" data-id="${todo.id}">
                    <div class="task_div_container">
                        <div>
                            <span>
                                <a data-element-id="${
                                  todo.id
                                }" onclick="toggleTask(this)"  class="btn todo_btn">
                                    ${getTaskIcon(todo.isChecked)}
                                </a>
                            </span>
                            <label for="todo-task-${todo.id}" class="sr-only">
                                Task ${todo.id}
                            </label>
                            <input id="todo-task-${todo.id}" 
                                    typedata-id="${todo.id}" 
                                    placeholder="new task" 
                                    type="text"
                                    value="${todo.task}"
                                    ${
                                      todo.isChecked && todo.task.length > 0
                                        ? "disabled"
                                        : ""
                                    }
                            />
                        </div>    
                        <button aria-label="Delete Task" class="btn btn-danger" 
                                onclick="deleteTask(${todo.id})"
                        >
                                🗑️
                        </button>
                    </div>
                </li>`;
}

// Toggle the completion status of a task and re-render the list
function toggleTask(element) {
  const taskId = parseInt(element.getAttribute("data-element-id"));
  const todo = todoList.find((todo) => todo.id === taskId);
  if (todo) {
    todo.isChecked = !todo.isChecked;
    renderTodoList();
  }
}

// Add a new empty task to the list and re-render
function addTask() {
  const newTask = {
    id: Date.now(),
    task: "",
    isChecked: false,
  };
  todoList.push(newTask);
  renderTodoList();
}

// Update the summary text showing the number of completed tasks
function updateCompleteTaskCount() {
  document.getElementById(
    "Completed_List_Summary"
  ).innerHTML = `Completed Tasks (${
    todoList.filter((todo) => todo.isChecked).length
  })`;
}

// Animate list items when they are added to the DOM
function animateNewItems() {
  requestAnimationFrame(() => {
    document.querySelectorAll("li.animate-in").forEach((li) => {
      li.offsetWidth; // Force reflow
      li.classList.remove("animate-in");
    });
  });
}

// Re-apply animation class to matching elements (for manual triggers)
function applyAnimation(selector, animationClass) {
  requestAnimationFrame(() => {
    document.querySelectorAll(selector).forEach((el) => {
      el.offsetWidth; // Trigger reflow
      el.classList.remove(animationClass);
    });
  });
}

// Show overlay with "Saving..." message for 500ms, then prompt user to continue
function saveTask() {
  const overlay = document.getElementById("overlay");
  const title = document.getElementById("modal_title");
  const buttons = document.getElementById("modal_buttons");

  title.textContent = "Saving...";
  buttons.style.display = "none";
  overlay.classList.add("show");

  setTimeout(() => {
    title.textContent = "Do you want to continue?";
    buttons.style.display = "block";
  }, 500);

  localStorage.setItem("todoList", JSON.stringify(todoList));
}

// Hide the modal overlay
function closeModal() {
  document.getElementById("overlay").classList.remove("show");
}

// Hide the modal and continue execution
function continueTask() {
  closeModal();
}

function deleteTask(taskId){
  todoList = todoList.filter((todo) => todo.id !== taskId);
  renderTodoList();
}
var getTaskIcon = (value) => {
  return value ? "✅" : "⬜️";
};
var todoList = [
  { id: Date.now(), task: "Task 1", isChecked: true },
  { id: Date.now() + 1, task: "Task 2", isChecked: false },
];

//event handler
window.onload = function () {
  renderTodoList();

  document.getElementById("Todo_List").addEventListener("input", (event) => {
    if (event.target.tagName === "INPUT" && event.target.hasAttribute("data-id")) {
      handleInputChange(event);
    }
  });

  document.getElementById("Completed_List").addEventListener("input", (event) => {
    if (event.target.tagName === "INPUT" && event.target.hasAttribute("data-id")) {
      handleInputChange(event);
    }
  });
};

//handle input change
function handleInputChange(event) {
  const element = event.target;
  const taskId = parseInt(element.getAttribute("data-id"));
  const todo = todoList.find((todo) => todo.id === taskId);
  if (todo) {
    todo.task = element.value;
    console.log(todoList);
  }
}

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

function generateListElement(todo) {
  return `<li class="animate-in" data-id="${todo.id}">
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
                    <input id="todo-task-${todo.id}" data-id="${
    todo.id
  }" placeholder="new task" ${
    todo.isChecked && todo.task.length > 0 ? "disabled" : ""
  } value="${todo.task}">
                </li>`;
}

function toggleTask(element) {
  const taskId = parseInt(element.getAttribute("data-element-id"));
  const todo = todoList.find((todo) => todo.id === taskId);
  if (todo) {
    todo.isChecked = !todo.isChecked;
    renderTodoList();
  }
}

function addTask() {
  const newTask = {
    id: Date.now(),
    task: "",
    isChecked: false,
  };
  todoList.push(newTask);
  renderTodoList();
}

function updateCompleteTaskCount() {
  document.getElementById(
    "Completed_List_Summary"
  ).innerHTML = `Completed Tasks (${
    todoList.filter((todo) => todo.isChecked).length
  })`;
}

function animateNewItems() {
  requestAnimationFrame(() => {
    document.querySelectorAll("li.animate-in").forEach((li) => {
      li.offsetWidth; // Force reflow
      li.classList.remove("animate-in");
    });
  });
}
function applyAnimation(selector, animationClass) {
  requestAnimationFrame(() => {
    document.querySelectorAll(selector).forEach((el) => {
      el.offsetWidth; // Trigger reflow
      el.classList.remove(animationClass);
    });
  });
}

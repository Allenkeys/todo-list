import './style.css';

const todo = [
  {
    index: 1,
    description: 'wash the dishes',
    completed: false,
  },
  {
    index: 2,
    description: 'Complete todo list tasks',
    completed: false,
  },
];

const todoWrapper = document.querySelector('.todo-list');

const displayTodo = () => {
  todo.forEach((item) => {
    const task = document.createElement('div');
    task.classList.add('task');
    task.innerHTML = `
    <input type="checkbox"> 
    <p class='info'>${item.description}</p>
    <i class="fa-solid fa-ellipsis-vertical"></i>
    `;
    todoWrapper.appendChild(task);
  });
};

displayTodo();

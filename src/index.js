import './style.css';

const todo = [
  {
    description: 'wash the dishes',
    completed: false,
  },
  {
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

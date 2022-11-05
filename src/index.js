import './style.css';
import Todo from './module/app.js';

const form = document.getElementById('form');

const todo = new Todo();

const createTask = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const description = form.elements.desc.value;
    todo.addTodo(description);
    todo.displayTodo();
    form.reset();
  });
  todo.removeCompleted();
  if (localStorage.getItem('todo')) {
    todo.displayTodo();
  }
};

createTask();

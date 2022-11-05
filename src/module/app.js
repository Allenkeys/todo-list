import { toLocalStorage, fromLocalStorage } from './utils';

export default class Todo {
  constructor() {
    this.details = [];
  }

  addTodo = (description) => {
    const postDetail = {
      index: this.details.length + 1,
      description,
      completed: false,
    };
    this.details = this.details.concat(postDetail);
    toLocalStorage(this.details);
    return this.details;
  }

  template = (task) => {
    return `
    <input type="checkbox"> 
    <textarea data-id=${task.index} class='info'>${task.description}</textarea>
    <i id='remove' data-id=${task.index} class="fa-solid fa-trash-can"></i>
    `
  };

  displayTodo = () => {
    let todoWrapper = document.querySelector('.todo-list');
    const getLocalData = fromLocalStorage('todo');
    this.details = getLocalData;
    todoWrapper.replaceChildren();
    this.details.forEach((item) => {
      const task = document.createElement('div');
      task.classList.add('task');
      task.innerHTML = this.template(item);
      todoWrapper.appendChild(task);
    });
    this.deleteTask();
    this.editTask();
  };

  editTask = () => {
    const description = document.querySelectorAll('.info');
    description.forEach(text => {
      text.addEventListener('keydown', (e) => {
        if(e.key === 'Enter') {
          const target = e.target.value;
          const id = e.target.getAttribute('data-id');
          this.details.find(item => {
            if(item.index == Number(id)) {
              item.description = target;
            }
            toLocalStorage(this.details);
            window.location.reload();
          });
        };
      });
    });
  }

  deleteTask = () => {
    const deleteBtn = document.querySelectorAll('#remove');
    deleteBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        this.details = this.details.filter(
          (el) => el.index !== Number(id)
        );
        let count = 1;
        while(count <= this.details.length) {
          this.details.forEach(task => {
            task.index = count;
            count++;
          });
        }
        toLocalStorage(this.details);
        this.displayTodo();
      });
    });
  }
}

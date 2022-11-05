const toLocalStorage = (todo) => localStorage.setItem('todo', JSON.stringify(todo));
const fromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));
export { toLocalStorage, fromLocalStorage };
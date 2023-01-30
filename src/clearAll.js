import { addToStorage } from './locaStorage.js';

const clearAllButton = document.querySelector('.clear__all__btn');

const clearAll = (todos, todoList) => {
  clearAllButton.addEventListener('click', () => {
    todoList.innerHTML = '';
    todos = todos.filter((todo) => todo.index < 0);
    addToStorage(todos);
  });
};

export default clearAll;

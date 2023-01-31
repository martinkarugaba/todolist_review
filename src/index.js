import './index.css';
import {
  addTodo,
  displayTodos,
  removeAndEditTodo,
} from './add-remove-edit.js';

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo();
  displayTodos();
  form.reset();
});

window.addEventListener('DOMContentLoaded', () => {
  displayTodos();
  removeAndEditTodo();
});

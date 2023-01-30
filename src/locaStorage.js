export const addToStorage = (todos) => {
  const storage = localStorage.setItem(
    'todos',
    JSON.stringify(todos),
  );
  return storage;
};

export const getFromStorage = () => {
  const storage = localStorage.getItem('todos') === null ? [] : JSON.parse(localStorage.getItem('todos'));
  return storage;
};

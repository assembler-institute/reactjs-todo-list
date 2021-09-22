export function getPreviousLocalStorageValues(localStorageKey) {
  const previousTodos = localStorage.getItem(localStorageKey);

  // If there are no todos
  if (!previousTodos) {
    return [];
  }
  // If there are previous todos
  try {
    return JSON.parse(previousTodos);
  } catch (error) {
    return [];
  }
}

export function setLocalStorageValues(localStorageKey, data) {
  localStorage.setItem(localStorageKey, JSON.stringify(data));
}

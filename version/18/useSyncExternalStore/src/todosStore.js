let nextId = 0;
let todos = [{ id: nextId++, text: "Todo 1" }];
let listeners = [];

export const todosStore = {
  addTodo() {
    todos = [...todos, { id: nextId++, text: "Todo " + nextId }];
    listeners.forEach((l) => l());
  },
  subscribe(listener) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return todos;
  },
};

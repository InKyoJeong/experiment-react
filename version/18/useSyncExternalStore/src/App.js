import { useSyncExternalStore } from "react";
import { todosStore } from "./todosStore";

function TodosApp() {
  const todos = useSyncExternalStore(
    todosStore.subscribe,
    todosStore.getSnapshot
  );

  return (
    <>
      <button onClick={() => todosStore.addTodo()}>Add todo</button>
      <hr />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}

const store = {
  state: { count: 0 },
  setState: (fn) => {
    store.state = fn(store.state);
    store.listeners.forEach((listener) => listener());
  },
  listeners: new Set(),
  subscribe: (callback) => {
    store.listeners.add(callback);

    return () => store.listeners.delete(callback);
  },
  getSnapshot: () => {
    const snap = Object.freeze(store.state);
    return snap;
  },
};

function SimpleCountApp() {
  const snap = useSyncExternalStore(store.subscribe, store.getSnapshot);

  return (
    <>
      <div>{snap.count}</div>
      <button
        onClick={() => store.setState((state) => ({ count: state.count + 1 }))}
      >
        증가
      </button>
    </>
  );
}

export default SimpleCountApp;

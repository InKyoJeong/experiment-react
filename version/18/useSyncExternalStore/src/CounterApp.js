import { useCallback, useEffect, useState, useSyncExternalStore } from "react";

const createStore = (initialState) => {
  let state = initialState;

  const getState = () => state;
  const listeners = new Set();
  const setState = (fn) => {
    state = fn(state);
    listeners.forEach((l) => l());
  };

  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  return { getState, setState, subscribe };
};

const useStore = (store, selector) => {
  return useSyncExternalStore(
    store.subscribe,
    useCallback(() => selector(store.getState()), [store, selector])
  );
  //   const [state, setState] = useState(() => selector(store.getState()));
  //   useEffect(() => {
  //     const callback = () => setState(selector(store.getState()));
  //     const unsubscribe = state.subscribe(callback);
  //     callback();
  //     return unsubscribe;
  //   }, [store, selector]);
  //   return state;
};

const store = createStore({ count: 0, text: "hi" });

const Counter = () => {
  const count = useStore(
    store,
    useCallback((state) => state.count, [])
  );
  const increase = () => {
    store.setState((prev) => ({ ...prev, count: prev.count + 1 }));
  };

  return (
    <div>
      {count} <button onClick={increase}>+1</button>
    </div>
  );
};

const CounterApp = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default CounterApp;

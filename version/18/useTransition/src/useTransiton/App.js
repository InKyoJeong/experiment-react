import { useState, useTransition } from "react";
import ItemList from "./ItemList";
import "./App.css";

const makeItems = (length) => {
  const dummyItems = [];
  if (!length) {
    return dummyItems;
  }

  for (let i = 0; i < 1000; i++) {
    dummyItems.push("item");
  }

  return dummyItems;
};

function App() {
  const [isPending, startTransition] = useTransition();
  const [boxCount, setBoxCount] = useState(0);

  const newItems = makeItems(boxCount);

  const handleUpdate = ({ target }) => {
    startTransition(() => {
      setBoxCount(target.value.length);
    });
  };

  return (
    <div>
      <input type="text" onChange={handleUpdate} />
      {isPending && <h1>Pending...</h1>}
      <ItemList items={newItems} />
    </div>
  );
}

export default App;

import { useState, useTransition } from "react";
import { generateItems } from "./data";
import ItemList from "./ItemList";

const dummyItems = generateItems();

const filterItems = (filterType) => {
  if (!filterType) {
    return dummyItems;
  }

  return dummyItems.filter((item) => item.includes(filterType));
};

function App() {
  const [isPending, startTransition] = useTransition();
  const [filterType, setFilterType] = useState("");

  const filteredItems = filterItems(filterType);

  // ---- after ----
  const handleFilterUpdate = (e) => {
    startTransition(() => {
      setFilterType(e.target.value); // lower priority
    });
  };

  return (
    <div>
      <input type="text" onChange={handleFilterUpdate} />
      <ItemList items={filteredItems} />
    </div>
  );
}

export default App;

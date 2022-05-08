import { useState } from "react";
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
  const [filterType, setFilterType] = useState("");

  const filteredItems = filterItems(filterType);

  const handleFilterUpdate = (e) => {
    setFilterType(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleFilterUpdate} />
      <ItemList items={filteredItems} />
    </div>
  );
}

export default App;

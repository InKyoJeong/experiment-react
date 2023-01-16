import "./App.css";
// import { useDeferredValue } from "react";

// function ItemList({ items }) {
//   const deferredItems = useDeferredValue(items);

//   return (
//     <ul>
//       {deferredItems.map((item) => (
//         <li key={item}>{item}</li>
//       ))}
//     </ul>
//   );
// }

// export default ItemList;

function ItemList({ items }) {
  return (
    <ul className="item-list">
      {items.map((item) => (
        // <li  className="item">
        <div key={item + Date.now()} className="item" />
        // </li>
      ))}
    </ul>
  );
}

export default ItemList;

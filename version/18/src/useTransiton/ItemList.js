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
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default ItemList;

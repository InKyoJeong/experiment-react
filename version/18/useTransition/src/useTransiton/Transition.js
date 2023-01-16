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
  // const handleFilterUpdate = (e) => {
  //   startTransition(() => {
  //     setFilterType(e.target.value); // lower priority
  //     // 아직도 약간 버벅이지만, 좀더 빨라진것을 볼 수 있다.
  //     // filterType을 업데이트하는것을 더 낮은 우선순위로 갖게했다.
  //     // input을 입력하고 지워보면 input이 먼저 비워지고 리스트가 출력. (input필드는 더 높은 우선순위)
  //   });
  // };

  // ---- before ----
  const handleFilterUpdate = (e) => {
    setFilterType(e.target.value);
    // 버벅인다. 지웠는데도 늦게지워진다.
    // 리액트에게 더 중요한 업데이트를 말해주지 않았기때문에 인풋을 지우면 리스트와 같이 동시에 늦게 지워진다.
  };

  return (
    <div>
      <input type="text" onChange={handleFilterUpdate} />
      {/* {isPending && <div>리스트 업데이트중...</div>} */}
      <ItemList items={filteredItems} />
    </div>
  );
}

export default App;

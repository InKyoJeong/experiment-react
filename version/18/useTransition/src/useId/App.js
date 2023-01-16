import { useId } from "react";

function Child() {
  const id = useId();

  return <div>child: {id}</div>;
}

function App() {
  const id = useId();
  console.log(id);

  return (
    <div>
      <Child />
      <Child />
      <Child />
      <Child />
      <Child />
      <Child />
      <Child />
      <Child />
      <Child />
      <Child />
      <Child />
      <Child />
      <Child />
      <Child />
      <Child />
      <Child />
      <Child />
      <Child />
    </div>
  );
}

export default App;

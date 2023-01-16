import { useState } from "react";

const App = () => {
  console.log("---실행됨---");

  const [counter, setCounter] = useState(0);

  const handleIncreaseCounter = () => {
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 2);
  };

  const handleDelayIncreaseCounter = () => {
    setTimeout(() => {
      setCounter((prev) => prev + 1);
      setCounter((prev) => prev + 2);
    }, 1000);
  };

  return (
    <div>
      <button onClick={handleIncreaseCounter}>증가</button>
      <button onClick={handleDelayIncreaseCounter}>1초후 증가</button>
      <h1>counter : {counter}</h1>
    </div>
  );
};

export default App;

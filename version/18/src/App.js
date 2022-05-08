import { useState } from "react";
// import { flushSync } from "react-dom";

const App = () => {
  console.log("---실행됨---");

  const [counter, setCounter] = useState(0);

  const handleIncreaseCounter = () => {
    // flushSync(() => {
    //   setCounter((prev) => prev + 1);
    // });
    // flushSync(() => {
    //   setCounter((prev) => prev + 2);
    // });
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
      <div style={{ fontSize: 30 }}>counter : {counter}</div>
    </div>
  );
};

export default App;

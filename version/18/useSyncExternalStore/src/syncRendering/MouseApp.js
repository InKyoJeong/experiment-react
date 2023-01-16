import { useState, useEffect, useRef } from "react";

const useMouseX = () => {
  const ref = useRef(0);
  useEffect(() => {
    const callback = (event) => {
      ref.current = event.clientX;
    };

    window.addEventListener("mousemove", callback);

    return () => window.removeEventListener("mousemove", callback);
  }, []);
  return ref.current;
};

const MousePositionX = () => {
  const x = useMouseX();
  const start = performance.now();

  while (performance.now() - start < 20) {}

  return <div>Mouse X: {x}</div>;
};

const MouseApp = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      {count} <button onClick={increase}>클릭</button>
      {[...Array(50).keys()].map((key) => (
        <MousePositionX key={key} />
      ))}
    </div>
  );
};

export default MouseApp;

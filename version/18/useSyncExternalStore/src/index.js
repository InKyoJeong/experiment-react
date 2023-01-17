import React from "react";
import ReactDOM from "react-dom/client";
import TodosApp from "./App";
import TearingMouseApp from "./concurrentRendering/TearingMouseApp";
import CounterApp from "./CounterApp";
// import MouseApp from "./syncRendering/MouseApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<TodosApp />);
root.render(<CounterApp />);

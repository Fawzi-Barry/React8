import React, { createContext } from "react";
import Child from "./Child";
import "./App.css";

export const AppContext = createContext();

const App = () => {
  const message = "Hello!";

  return (
    <AppContext.Provider value={message}>
      <div className="parent">
        <h1>Parent Component</h1>
        <p>This is the parent component passing data to the child.</p>
        <Child />
      </div>
    </AppContext.Provider>
  );
};

export default App;

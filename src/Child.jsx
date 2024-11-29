import React, { useContext } from "react";
import { AppContext } from "./App";
import "./App.css";

const Child = () => {
  const message = useContext(AppContext);

  return (
    <div className="child">
      <h2>Child Component</h2>
      <p>Received message: <strong>{message}</strong></p>
    </div>
  );
};

export default Child;

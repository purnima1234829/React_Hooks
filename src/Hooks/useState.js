import React, { useState } from "react";
import "./style.css";

const UseState = () => {
  const [state, setState] = useState(10);
  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div class="button2" onClick={() => setState(state + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          iNCR
        </div>
        <div
          class="button2"
          onClick={() => (state > 0 ? setState(state - 1) : setState(0))}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};
export default UseState;

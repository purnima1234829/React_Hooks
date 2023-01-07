import React, { useState, useEffect } from "react";
import "./style.css";

const UseEffect = () => {
  const [state, setState] = useState(0);
  useEffect(() => {
    //when we want functionality on our webpage i.e. user 1st time visit our page & something shows only that time
    document.title = `Chats(${state})`;
  }); //[]is used for when we refresh on that time only useEffect will run
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
      </div>
    </>
  );
};
export default UseEffect;

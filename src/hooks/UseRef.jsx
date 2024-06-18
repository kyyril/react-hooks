// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState,useRef } from "react";

//UseRef tidak melakukan render saat di digunakan
//salah satu kegunaan nya yaitu untuk focus input
const UseRef = () => {
  const inputRef = useRef(null)

  const handleFocus = () => {
    inputRef.current.focus()
  }
  return (
    <div className="container">
      <div className="hooks">UseRef</div>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>click here</button>
    </div>
  );
};

export default UseRef;

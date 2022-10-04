import React, { useState } from "react";

function Item({ name, category }) {

  const [isOn, setIsOn] = useState(false);
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isOn ? "in-cart" : ""
  
  function handleClick() {
    setIsOn((isOn) => !isOn)
    console.log(isOn)
  }

  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{isOn ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;

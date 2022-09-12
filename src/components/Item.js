import React, { useState } from "react";

function Item({ name, category }) {
  const [item, setItem] = useState(false)
  const liClass = item ? "in-cart" : " "
  const btnClass = item ? "remove" : "add"

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={btnClass} onClick={() => setItem(item => !item)}>{item ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;

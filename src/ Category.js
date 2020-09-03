import React from "react";




function Category (props) {
  return (
    <button name={props.cat} onClick={(e) => props.clickHandler(e)}>
    {props.cat}
  </button>
  )
}

export default Category;

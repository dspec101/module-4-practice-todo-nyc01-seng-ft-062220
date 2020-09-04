import React from "react";

const Category = (props) => {
    return (
      <button
        name={props.cat}
        class={
        props.cat === props.selectedCat?
        "selected" : null
        }
        onClick={(e) => props.clickHandler(e)}
      >
        {props.cat}
      </button>
    );
  }


export default Category;

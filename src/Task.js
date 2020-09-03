import React from "react";

function Task(props) {
  return (
    <div>
      <div class="task">
        <div class="label"> {props.t.category} </div>
        <div class="text"> {props.t.text} </div>
        <button class="delete" onClick={() => props.handleDelete(props.t)}>
          X
        </button>
      </div>
    </div>
  );
}

export default Task;

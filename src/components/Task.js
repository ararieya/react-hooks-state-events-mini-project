import React from "react";

function Task({ text, category, handleDelete }) {

  return (
    <div className="task">
      <div className="label">CATEGORY HERE</div>
      <div className="text">TEXT HERE</div>
      <button onClick={() => handleDelete({ text })} className="delete">X</button>
    </div>
  );
}

export default Task;

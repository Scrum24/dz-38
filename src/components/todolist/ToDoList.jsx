import React from "react";
import "./ToDoList.css";

function ToDoList({tdList, deleteTask, updateIsDone}) {
  return (
    <>
      {tdList.map((el) => (
        <div key={el.id} onClick={() => updateIsDone(el.id)} className="task">
          <div>
            <b>ID:</b> {el.id}
          </div>
          <div>
            <b>Title:</b> {el.title}
          </div>
          <div>
            <b>Description:</b> {el.description}
          </div>
          <div>
            <b>IsDone:</b> {el.isDone.toString()}
          </div>

          <div className="btn">
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteTask(el.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default ToDoList;

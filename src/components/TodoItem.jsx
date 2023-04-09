import { RiCloseCircleLine } from "react-icons/ri";

import React from "react";

function TodoItem(props) {
  const { todo, removeTodo, importantTodo } = props;
  return (
    <div
      className={todo.completed ? "todo-row" : "todo-row"}
      style={todo.important ? { background: "orange" } : {}}
    >
      {todo.text}
      <div className="iconsContainer">
        <button
          onClick={() => importantTodo(todo.id)}
          className="important-btn"
        >
          !
        </button>
        <RiCloseCircleLine
          style={{ marginRight: 5, fontSize: 20}}
          onClick={() => removeTodo(todo.id)}
        />
      </div>
    </div>
  );
}

export default TodoItem;

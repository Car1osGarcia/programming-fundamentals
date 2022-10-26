import React, { useState } from "react";
import {
  RiCloseCircleLine,
  RiCheckboxCircleLine,
  RiArrowDownCircleLine,
} from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { useSelector } from "react-redux";
import { TodoEditForm } from "./TodoEditForm";

const Todo = ({
  completeTodo,
  removeTodo,
  updateTodo,
  showDescription,
}) => {

  const {todos} = useSelector(state => state.todo);

  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoEditForm edit={edit} setEdit={setEdit} />;
  }

  return todos.map((todo, index) => (
    // <div>
    <div
      className={todo.state===1 ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div className="description">
        <div
          key={todo.idTodos}
          onClick={() => completeTodo(todo)}
          className="todo"
        >
          {todo.title}
        </div>
        <div className="priority">
          p: {todo.priority}
        </div>
        <div className="icons">
          <RiCheckboxCircleLine
            onClick={() => completeTodo(todo)}
            className="delete-icon"
          />
          <RiArrowDownCircleLine
            onClick={() => showDescription(todo.idTodos)}
            className="delete-icon"
          />
          <RiCloseCircleLine
            onClick={() => removeTodo(todo.idTodos)}
            className="delete-icon"
          />
          <TiEdit
            onClick={() =>
              setEdit({
                id: todo.idTodos,
                value: todo.title,
                description: todo.description,
                priority: todo.priority,
                state: todo.state
              })
            }
            className="edit-icon"
          />
        </div>
      </div>
      {todo.showDescription && (
        <div onClick={() => completeTodo(todo.idTodos)} className="description2">
          <div
            className="todo"
          >
            Description: {todo.description}
          </div>
          {todo.editDate && (<div
            className="todo"
          >
            Last edit: {todo.editDate}
          </div>)}
        </div>
      )}
    </div>
    // </div>
  ));
};

export default Todo;

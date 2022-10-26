import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeleteTodo, fetchEditTodo, modifyAllTodos, modifyCompletedTodo, modifyDeleteTodo, modifyDescriptionTodo, orderAllTodos } from "../store/todo/todoSlice";

function TodoList() {
  //const [todos, setTodos] = useState([]);
  const dispatch = useDispatch();
  const {todos,todosR} = useSelector(state => state.todo);
  


  useEffect(() => {
    dispatch(modifyAllTodos(todos));
  }, [todosR]);


  const addTodo = (todo) => {}

  // const addTodo = (todo) => {
  //   if (!todo.text || /^\s*$/.test(todo.text)) {
  //     return;
  //   }

  //   const newTodos = [todo, ...todos];

  //   setTodos(newTodos);
  //   console.log(...todos);
  // };

  const showDescription = (todoId) => {
    let tempTodos = [...todos];
    let updatedTodos = tempTodos.map((todoA) => {
      let tempTodo= {...todoA}
      if (todoA.idTodos === todoId) {
        tempTodo.showDescription = !tempTodo.showDescription;
      }
      return tempTodo;
    });
    dispatch(modifyDescriptionTodo(updatedTodos))
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    //dispatch(fetchEditTodo(todoId))
    //   setTodos((prev) =>
    //     prev.map((item) => (item.id === todoId ? newValue : item))
    //   );
  };

   const removeTodo = (id) => {
  //   const removedArr = [...todos].filter((todo) => todo.id !== id);
  //   setTodos(removedArr);
      dispatch(fetchDeleteTodo(id));
      dispatch(modifyDeleteTodo(todos,id))
   };

  const completeTodo = (todo) => {
    dispatch(fetchEditTodo({ idTodo:todo.idTodos, title:todo.title, description:todo.description, priority:todo.priority, state: !todo.state}));
    dispatch(modifyCompletedTodo(todos,todo.idTodos))
  };

  const orderTodos = () =>{
    dispatch(orderAllTodos(todos))
  }

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm  onSubmit={addTodo} />
      <button className="buton-order" onClick={orderTodos}>Order by priority</button>
      <Todo
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        showDescription={showDescription}
      />
    </>
  );
}

export default TodoList;

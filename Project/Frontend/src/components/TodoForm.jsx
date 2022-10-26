import React, { useState, useEffect } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../hooks/useForm";
import { fetchCreateTodo } from "../store/todo/todoSlice";
import Swal from 'sweetalert2';


const formData = {
  name: '',
  description: '',
  priority: 1
}

const formValidations = {
  name: [(value) => value.length<20 && value.length > 5, 'The name must be less than 20 letters and more than 5'],
  description: [(value) => value.length >= 6, 'The password is invalid'],
  priority: [(value) => value >= 1 && value<=5, 'The priority is invalid'],
}


function TodoForm(props) {
  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const {  message } = useSelector(state => state.todo);

  const {
     name, description, priority, onInputChange,
    isFormValid,
  } = useForm(formData, formValidations);

  // useEffect(()=>{
  //     if(logged){
  //         Navigate("/")
  //     }
  // },[logged])

  useEffect(() => {
      if ( message !== null  ) {
          if( message!=="Invalid token" && message!=="No token provided"){
              if(message==="todo created succesfully"){
                Swal.fire({
                  position: 'top',
                  icon: 'success',
                  title: message,
                  showConfirmButton: false,
                  timer: 1500
                },message,'success')
              }else{
                Swal.fire('Authentication failed', message, 'error');
              }
          }
      }    
    }, [message])


  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;

    dispatch(fetchCreateTodo({ title: name, description, priority }))
  }

  return (
    <form onSubmit={onSubmit} className="todo-form">
      <div className="todo-first-part">
        <input
          placeholder="Add a todo"
          value={name}
          onChange={onInputChange}
          name="name"
          className="todo-input"
        />

        <input
          value={priority}
          onChange={onInputChange}
          className="todo-input-number"
          type="number"
          name="priority"
          min="1" max="5"
        />

        <button onClick={onSubmit} className="todo-button">
          <BsPlusCircleFill />
        </button>

      </div>
      {
        <textarea
          placeholder="Description"
          value={description}
          onChange={onInputChange}
          name="description"
          className="todo-input todo-description"
        />
      }
    </form>
  );
}

export default TodoForm;

import React, { useEffect, useState } from 'react'
import { RiCheckboxCircleLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { fetchEditTodo, modifyEditTodo } from '../store/todo/todoSlice';

const formData = {
    title: '',
    description: '',
    priority: 3
  }
  
  const formValidations = {
    title: [(value) => value.length<20 && value.length > 3, 'The title must be less than 20 letters and more than 3'],
    description: [(value) => value.length >= 5, 'The description is invalid'],
    priority: [(value) => value >= 1 && value<=5, 'The priority is invalid']
  }

export const TodoEditForm = ({edit,setEdit}) => {
    const dispatch = useDispatch();

    const [formSubmitted, setFormSubmitted] = useState(false);
    const {todos} = useSelector(state => state.todo);


    useEffect(()=>{
        formData.title=edit.value;
        formData.description= edit.description;
        formData.priority = edit.priority;
    },[])


    const {
        formState, title, description,priority, onInputChange,
        isFormValid
    } = useForm(formData, formValidations);

    

    // useEffect(() => {
    //     if ( message !== null  ) {
    //         if( message!="Invalid token" && message!="No token provided"){
    //             console.log(message);
    //             Swal.fire('Authentication failed', message, 'error');
    //         }
    //     }    
    //   }, [message])


    const onSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        
        if (!isFormValid) return;

        dispatch(fetchEditTodo({ idTodo:edit.id ,title, description, priority, state:edit.state}));
        let data = {...edit};
        data.title= title;
        data.description= description;
        data.priority = priority
        dispatch(modifyEditTodo(todos,{title, description, priority},edit.id));
        setEdit({
            id: null,
            value: "",
          });
    }

    return (
        <form onSubmit={onSubmit} className="todo-form">
            <div className="todo-form--update">
                <input
                    placeholder="Update your item"
                    value={title}
                    onChange={onInputChange}
                    name="title"
                    className="todo-input edit todo-description"
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={onInputChange}
                    name="description"
                    className="todo-input todo-description"
                />
                <div className='description-edit'>
                    <input 
                        value={priority}
                        onChange={onInputChange}
                        className="todo-input-number"
                        type="number"  
                        name="priority" 
                        min="1" max="5"
                    />
                    <button onClick={onSubmit} className="todo-button">
                        <RiCheckboxCircleLine />
                    </button>
                </div>
            </div>
        </form>
    )
}

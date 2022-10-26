import React, {useState, useEffect} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { IoIosMail } from "react-icons/io";
import { FaLock, FaUserAlt } from "react-icons/fa";
import Swal from 'sweetalert2';

import { useForm } from '../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegister } from '../store/auth/authSlice';

const formData = {
    lastName: '',
    name: '',
    email: '',
    password: '',
    password2: ''
}

const formValidations = {
    lastName: [(value) => value.length >= 3, 'Last name is invalid'],
    name: [(value) => value.length >= 3, 'Last name is invalid'],
    email: [(value) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value), 'The mail is invalid'],
    password: [(value) => value.length >= 6, 'The password is invalid'],
    password2: [(value) => value.length >= 6, 'The confirm password is invalid'],
}

export const RegisterForm = () => {

    const dispatch = useDispatch();

    const [formSubmitted, setFormSubmitted] = useState(false);

    const { message } = useSelector(state => state.auth);

    const {
        formState, lastName, name,  email, password, password2, onInputChange,
        isFormValid, lastNameValid, nameValid, emailValid, passwordValid, password2Valid
    } = useForm(formData, formValidations);

    useEffect(() => {
        if ( message !== null  ) {
            if( message!=="Invalid token" && message!=="No token provided"){
                Swal.fire('Authentication failed', message, 'error');
            }
        }    
      }, [message])

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        if(!isFormValid)return;
        if( password!==password2){
            Swal.fire('Confirm password must be the same', message, 'error');
            return
        }
        
        dispatch(fetchRegister({lastName, name, email, password}))
    }

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <div className='todo-father-input'>
                <FaUserAlt className='todo-icon-input2'/>
                <input
                    placeholder="Last Name"
                    value={lastName}
                    onChange={onInputChange}
                    name="lastName"
                    type="text"
                    className="todo-input-signup"
                />
            </div>
            <div className='todo-father-input'>
                <FaUserAlt className='todo-icon-input2'/>
                <input
                    placeholder="Name"
                    value={name}
                    onChange={onInputChange}
                    name="name"
                    type="text"
                    className="todo-input-signup"
                />
            </div>
            <div className='todo-father-input'>
                <IoIosMail className='todo-icon-input'/>
                <input
                    placeholder="ejemplo@gmail.com"
                    value={email}
                    onChange={onInputChange}
                    name="email"
                    type="email"
                    className="todo-input-signup"
                />
            </div>
            <div className='todo-father-input'>
                <FaLock className='todo-icon-input2'/>
                <input
                    placeholder="password"
                    value={password}
                    onChange={onInputChange}
                    type="password"
                    name="password"
                    className="todo-input-signup"
                    autoComplete="off"
                />
            </div>
            <div className='todo-father-input'>
                <FaLock className='todo-icon-input2'/>
                <input
                    placeholder="Confirm password"
                    value={password2}
                    onChange={onInputChange}
                    type="password"
                    name="password2"
                    className="todo-input-signup"
                    autoComplete="off"
                />
            </div>
             
            {
                ((!isFormValid) && formSubmitted) ?
                <ul className='login-errors'> 
                   {lastNameValid && <li className='login-error'>{lastNameValid} </li>}
                   {nameValid && <li className='login-error'>{nameValid} </li>}
                   {emailValid && <li className='login-error'> {emailValid}</li>}
                   {passwordValid && <li className='login-error'>{passwordValid} </li>}
                   {password2Valid && <li className='login-error'>{password2Valid} </li>}
                </ul> : ''
            }

            <button onClick={handleSubmit} className="login-button">
                <h1>Sign up</h1>
            </button>
            <RouterLink className='login-link'  to='/auth/login'>
                <h3 >Already have an account? </h3>
            </RouterLink>
            {/* <h3 className='login-link'>Crear cuenta</h3> */}
        </form>
    )
}

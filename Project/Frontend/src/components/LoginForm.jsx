import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { IoIosMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import Swal from 'sweetalert2';

import { useForm } from '../hooks/useForm';
import { fetchLogin } from '../store/auth/authSlice';


const formData = {
    email: '',
    password: ''
}

const formValidations = {
    email: [(value) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value), 'The mail is invalid'],
    password: [(value) => value.length >= 6, 'The password is invalid'],
}

export const LoginForm = () => {
    const dispatch = useDispatch();

    const [formSubmitted, setFormSubmitted] = useState(false);

    const { loading, message } = useSelector(state => state.auth);

    const {
        formState, email, password, onInputChange,
        isFormValid, emailValid, passwordValid
    } = useForm(formData, formValidations);

  
    useEffect(() => {
        if ( message !== null  ) {
            if( message!=="Invalid token" && message!=="No token provided"){
                Swal.fire('Authentication failed', message, 'error');
                
            }
        }    
      }, [message])


    const onSubmit = (event) =>{
        event.preventDefault();
        setFormSubmitted(true);
        if(!isFormValid)return;
        
        dispatch(fetchLogin({email,password}))
      }


    return (
        <form onSubmit={onSubmit} className="login-form">
            <div className='todo-father-input'>
                <IoIosMail className='todo-icon-input' />
                <input
                    placeholder="ejemplo@gmail.com"
                    onChange={onInputChange}
                    name="email"
                    type="email"
                    value= {email}
                    className="login-todo-input"
                />
            </div>
            <div className='todo-father-input'>
                <FaLock className='todo-icon-input2' />
                <input
                    placeholder="Password"
                    onChange={onInputChange}
                    type="password"
                    name="password"
                    value= {password}
                    className="login-todo-input"
                    autoComplete="on"
                />
            </div>

            
            {
                ((!isFormValid) && formSubmitted) ?
                <ul className='login-errors'> 
                   {passwordValid && <li className='login-error'>{passwordValid} </li>}
                   {emailValid && <li className='login-error'> {emailValid}</li>}
                </ul> : ''
            }

            <button type='submit' className="login-button">
                <h1>{!loading ? "Log In" : "Loading"}</h1>
            </button>
            <RouterLink className='login-link' to='/auth/register'>
                <h3 >Sign up</h3>
            </RouterLink>
            {/* <h3 className='login-link'>Crear cuenta</h3> */}
        </form>
    )
}

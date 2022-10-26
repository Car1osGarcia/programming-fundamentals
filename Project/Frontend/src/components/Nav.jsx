import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FiLogOut } from "react-icons/fi";
import { clearLogOut, fetchLogout } from '../store/auth/authSlice';
import { clearTodos } from '../store/todo/todoSlice';


export const Nav = () => {
    const dispatch = useDispatch();


    const {displayName } = useSelector(state => state.auth);

    const handleLogOut = () => {
        dispatch(fetchLogout());
        dispatch(clearLogOut());
        dispatch(clearTodos());
    }

    return (
        <div className='navBar'>
            <h3 >Welcome {displayName }</h3> 
            <div className='navBar-logout' onClick={handleLogOut}><FiLogOut/></div>
        </div>
    )
}

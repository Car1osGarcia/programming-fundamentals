import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from "react-router-dom"
import { fetchRevalidate } from '../store/auth/authSlice';
import { AuthRoutes } from './AuthRoutes';
import { MainRoutes } from './MainRoutes';


export const AppRouter = () => {
    const dispatch = useDispatch();

    const {  logged} = useSelector(state => state.auth);

    useEffect(()=>{
        dispatch(fetchRevalidate());
        
    },[])

    return (
        <Routes>
            {
                (logged)
                    ? <Route path="/*" element={<MainRoutes />} />
                    : <Route path="/auth/*" element={<AuthRoutes/>} />
            }

            <Route path='/*' element={<Navigate to='/auth/login' />} />
        </Routes>
    )
}

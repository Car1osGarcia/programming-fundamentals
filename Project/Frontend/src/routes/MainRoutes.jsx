import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom"
import { fetchReadTodos, modifyAllTodos } from '../store/todo/todoSlice';

import { MainPage } from "../pages/MainPage"

export const MainRoutes = () => {

  const dispatch = useDispatch();

  const { logged } = useSelector(state => state.auth);
  const { todos } = useSelector(state => state.todo);

  useEffect(() => {
    console.log('logueado' + logged);
    if (logged) {
      dispatch(fetchReadTodos());

    }

  }, [logged])


  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
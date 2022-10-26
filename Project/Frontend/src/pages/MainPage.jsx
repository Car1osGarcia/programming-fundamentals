import React from 'react'
import { Nav } from '../components/Nav'
import TodoList from '../components/TodoList'

export const MainPage = () => {
  return (
    <>
      <Nav />
      <div className="todo-app">
        <TodoList />
      </div>
    </>
  )
}

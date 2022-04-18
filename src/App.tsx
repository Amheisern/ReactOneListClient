import React from 'react'
import logo from './images/sdg-logo.png'
import { TodoList } from './components/TodoList'
import { Routes, Route } from 'react-router-dom'

export type TodoItemType = {
  id: number
  text: string
  complete: boolean
  updated_at: Date
  created_at: Date
}

export function App() {
  return (
    <div className="app">
      <header>
        <h1>One List</h1>
      </header>
      <main>
        <Routes>
          <Route path="/">
            <TodoList />
          </Route>
        </Routes>
      </main>
      <footer>
        <p>
          <img src={logo} height="42" alt="logo" />
        </p>
        <p>&copy; 2020 Suncoast Developers Guild</p>
      </footer>
    </div>
  )
}

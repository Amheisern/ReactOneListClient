import React from 'react'
import logo from './images/sdg-logo.png'
import { TodoList } from './pages/TodoList'
import { Routes, Route } from 'react-router'
import { TodoItemPage } from './pages/TodoItemPage'
import { Link } from 'react-router-dom'

export type TodoItemType = {
  id: number | undefined
  text: string
  complete: boolean
  updated_at: Date | undefined
  created_at: Date | undefined
}

export function App() {
  return (
    <div className="app">
      <header>
        <h1>One List</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<TodoList />}>
          </Route>
          <Route path="/items/:id" element={<TodoItemPage />}>
            This would be the details of item 42!
          </Route>
          <Route path="*">
          </Route>
        </Routes>
      </main>
      <footer>
        <p>
          <Link to="/">
          <img src={logo} height="42" alt="Home" />
          </Link>
        </p>
        <p>&copy; 2020 Suncoast Developers Guild</p>
      </footer>
    </div>
  )
}

import React from 'react'
import logo from './images/sdg-logo.png'
import { TodoList } from './pages/TodoList'
import { Routes, Route } from 'react-router'
import { TodoItemPage } from './pages/TodoItemPage'

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
          <Route path="/">
            <TodoList />
          </Route>
          <Route path="/items/:id">
            This would be the details of item 42!
            <TodoItemPage />
          </Route>
          <Route path="*">
            <p>Ooops, that URL is unknown</p>
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

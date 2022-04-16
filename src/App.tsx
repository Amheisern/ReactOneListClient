import axios from 'axios'
import React, { useState, useEffect } from 'react'
import logo from './images/sdg-logo.png'

type TodoItemType = {
  id: number
  text: string
  complete: boolean
  updated_at: Date
  created_at: Date
}

export function App() {
  const [todoItems, setTodoItems] = useState<TodoItemType[]>([])
  // We cannot use an async function directly in useEffect
  // The solution is to define the async function INSIDE and then
  // call it
  useEffect(function () {
    //
    //
    // This is the async function inside the function
    async function fetchListOfItems() {
      const response = await axios.get(
        'https://one-list-api.herokuapp.com/items?access_token=cohort21'
      )
      if (response.status === 200) {
        setTodoItems(response.data)
      }
    }
    fetchListOfItems()
  }, [])

  return (
    <div className="app">
      <header>
        <h1>One List</h1>
      </header>
      <main>
        <ul>
          {todoItems.map(function (todoItem) {
            return (
              <li
                key={todoItem.id}
                className={todoItem.complete ? 'completed' : undefined}
              >
                {todoItem.text}
              </li>
            )
          })}
        </ul>
        <form>
          <input type="text" placeholder="Whats up?" />
        </form>
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

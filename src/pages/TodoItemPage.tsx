import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate} from 'react-router'
import { Link } from 'react-router-dom'
import { TodoItemType } from '../App'


export function TodoItemPage() {
   const history = useNavigate()
  const params = useParams<{ id: string }>()
  const [todoItem, setTodoItem] = useState<TodoItemType>({
    id: undefined,
    text: '',
    complete: false,
    created_at: undefined,
    updated_at: undefined,
  })

  useEffect(
    function () {
      async function loadItems() {
        const response = await axios.get(
          `https://one-list-api.herokuapp.com/items/${params.id}?access_token=cohort21`
        )
        if (response.status === 200) {
          setTodoItem(response.data)
        }
      }
      loadItems()
    },
    [params.id]
  )
async function deleteTodoItem() {
  const response = await axios.delete(
    `https://one-list-api.herokuapp.com/items/${params.id}?access_token=cohort42`
  )
  // Need to redirect back to the main page!
  if (response.status === 204) {
    // Send the user back to the homepage
     history('/')
  }
}
if (!todoItem.id) {
  return null
}
  return (
    <div>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p className={todoItem.complete ? 'completed' : ''}>{todoItem.text}</p>
      <p>Created: {todoItem.created_at}</p>
      <p>Updated: {todoItem.updated_at}</p>
      <button onClick={deleteTodoItem}>Delete</button>
    </div>
  )
}


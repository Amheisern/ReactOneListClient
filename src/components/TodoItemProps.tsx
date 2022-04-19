import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { TodoItemType } from '../App'

type TodoItemProps = {
  todoItem: TodoItemType
  reloadItems: () => void
}
export function TodoItem({
  todoItem: { id, text, complete },
  reloadItems,
}: TodoItemProps) {
  //destructuring to remove repeated use of props.
  // const { todoItem, reloadItems } = props
  //further destructing defining props in the TodoItem function argument
  async function toggleCompleteStatus() {
    //This is the style often used for boolean or toggleable values
    const response = await axios.put(
      `https://one-list-api.herokuapp.com/items/${id}?access_token=cohort21`,
      { item: { complete: !complete } }
    )
    if (response.status === 200) {
      reloadItems()
    }
  }
  return (
    <li
      className={complete ? 'completed' : undefined} >
      <span onClick={toggleCompleteStatus}>{text}</span>
      <Link to={`/items/${id}`}>Show</Link>
    </li>
    
  )
}

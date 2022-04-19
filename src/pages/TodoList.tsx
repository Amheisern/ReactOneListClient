import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { TodoItem } from '../components/TodoItemProps';
import { TodoItemType } from '../App';

export function TodoList() {
  const [todoItems, setTodoItems] = useState<TodoItemType[]>([]);
  const [newTodoText, setNewTodoText] = useState('');
  // We cannot use an async function directly in useEffect
  // The solution is to define the async function INSIDE and then
  // call it
  function loadAllTheItems() {
    // This is the async function inside the function
    async function fetchListOfItems() {
      const response = await axios.get(
        'https://one-list-api.herokuapp.com/items?access_token=cohort21'
      );
      if (response.status === 200) {
        setTodoItems(response.data);
      }
    }
    fetchListOfItems();
  }

  useEffect(loadAllTheItems, []);

  async function handleCreateNewTodoItem() {
    // Update handleCreateNewTodoItem to submit
    const response = await axios.post(
      'https://one-list-api.herokuapp.com/items?access_token=cohort21',
      { item: { text: newTodoText } }
    );
    if (response.status === 201) {
      loadAllTheItems();
      // const refreshTodoResponse = await axios.get(
      // 'https://one-list-api.herokuapp.com/items?access_token=cohort21'
      // )
      // if (refreshTodoResponse.status === 200) {
      // setTodoItems(refreshTodoResponse.data)
      //Clears the input field when submit is successful
      // setNewTodoText('')
      // const newTodo = response.data
      // // Create a new array by *spreading* the old list and putting our new item at the end. Use [newTodo, ...todoItems] to *prepend* the new item
      // const newTodoItems = [...todoItems, newTodo]
      // setTodoItems(newTodoItems)
      // }
    }
  }

  return (<React.Fragment>
    <ul>
      {todoItems.map(function (todoItem) {
        return (
          <TodoItem
            key={todoItem.id}
            todoItem={todoItem}
            reloadItems={loadAllTheItems} />
        );
      })}
    </ul>
    <form
      onSubmit={function (event) {
        // Don't do the normal form submit (which would cause the page to refresh)
        // since we are going to do our own thing
        event.preventDefault();
        handleCreateNewTodoItem();
      }}
    >
      <input
        type="text"
        placeholder="Whats up?"
        value={newTodoText}
        onChange={function (event) {
          setNewTodoText(event.target.value);
        }} />
    </form>
  </React.Fragment>);
}

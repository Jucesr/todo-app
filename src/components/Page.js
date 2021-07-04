import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import todosData from "../data/todos";
import TodoItem from "./TodoItem";
import Form from "./Form";

const Page = (props) => {

   const [data, setData] = useState(todosData)

   const addTodo = (todo) => {
      setData([
         ...data,
         {
            ...todo,
            id: Date.now()
         }
      ])
   }

   const deleteTodo = (todoId) => {
      setData(data.filter(todoItem => todoItem.id !== todoId))
   }

   return (
      <div className="Page">
         {data.map(todoItem => {
            return (
               <TodoItem
                  key={todoItem.id}
                  id={todoItem.id}
                  title={todoItem.title}
                  description={todoItem.description}
                  deleteTodo={deleteTodo}
               />
            )
         })}
         <Form
            onSubmit={addTodo}
         />
      </div>
   )
}

Page.propTypes = {

}

export default Page
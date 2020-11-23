import React, { useState, useEffect } from "react"
import TodoItem from "./components/TodoItem"
import todoData from "./todoData"

function App() {

  const [todos, setTodos] = useState(todoData)

  useEffect(() => {
    const LOCAL_TODO = localStorage.getItem("local-todo")
    LOCAL_TODO && setTodos(JSON.parse(LOCAL_TODO))
  }, [])

  useEffect(() => {
    localStorage.setItem("local-todo", JSON.stringify(todos))
  })

  const handleClick = (id) => {
    setTodos(prevTodos => {
      const updateTodo = prevTodos.map(todo => {
            if(todo.id === id) {
              return {
                ...todo,
                completed: !todo.completed
              }
            }
          return todo
        })
        return updateTodo
    })
  }

  return (
    <div className="todo-list">
        {todos.map(item => <TodoItem key={item.id} item={item} handleClick={handleClick}/>)}
    </div>
  )

}

export default App
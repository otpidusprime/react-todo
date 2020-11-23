import React, { useState, useEffect } from "react"
import TodoItem from "./components/TodoItem"
import todoData from "./todoData"

function App() {

  const [todos, setTodos] = useState(todoData)

  // useEffect(() => {
  //   if("local-todo" in localStorage) {
  //     const LOCAL_TODO = JSON.parse(localStorage.getItem("local-todo"))
  //     setTodos(LOCAL_TODO)
  //   }
  // },[])

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

// class App extends React.Component {


//   componentDidUpdate(prevProps, prevState) {
//     if(prevState.todos !== this.state.todos) {
//       this.setState({
//         localStorage: localStorage.setItem("local-todo", JSON.stringify(this.state.todos))
//       })
//     }
//   }
  
//   render() {

//     const todoList = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleClick={this.handleClick}/>)

//     return (
//       <div className="todo-list">
//           {todoList}
//       </div>
//     )
//   }
// }

export default App
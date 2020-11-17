import React from "react"
import TodoItem from "./components/TodoItem"
import todoData from "./todoData"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todoData
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(id) {
    this.setState((prevState) => {

      const updateTodo = prevState.todos.map(todo => {
        if(todo.id === id) {
          return {
          ...todo,
          completed: !todo.completed
          }
        }
        return todo
      })

      return {
        todos: updateTodo
      }
    })
  }

  componentDidMount() {
    if(localStorage.getItem("local-todo")){
      this.setState({
        todos: JSON.parse(localStorage.getItem("local-todo"))
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.todos !== this.state.todos) {
      this.setState({
        localStorage: localStorage.setItem("local-todo", JSON.stringify(this.state.todos))
      })
    }
  }
  
  render() {

    const todoList = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleClick={this.handleClick}/>)

    return (
      <div className="todo-list">
          {todoList}
      </div>
    )
  }
}

export default App
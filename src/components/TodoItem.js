import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox"
                id={props.item.id}
                checked={props.item.completed}
                onChange={() => {props.handleClick(props.item.id)}}
            />
            <label style={{textDecoration: (props.item.completed) ? "line-through" : "" }}>{props.item.text}</label>
        </div>
    )
}

export default TodoItem
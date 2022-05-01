import React from "react";

function Todo({description, }) {

    return <div>
            <div className="todo-item">
                <p> {description, todos, setTodos} </p>
                <button className="edit-todo-button">Edit</button>
                <button className="delete-todo-button">Delete</button>
                <button className="done-todo-button">Done</button>
            </div>
    </div>

}

export default Todo;
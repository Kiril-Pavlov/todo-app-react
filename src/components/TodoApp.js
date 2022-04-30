import React from "react";

function TodoApp(){

    


    return <div>
        <div className="main-container">
            <div className="input-container">
                <input type="text" />
                <button>Add task</button>
            </div>
            <div className="todos-list">
                <div className="todo-item">
                    <p> Task 1 </p>
                    <button className="edit-todo-button">Edit</button>
                    <button className="delete-todo-button">Delete</button>
                    <button className="done-todo-button">Done</button>
                </div>
                <div className="todo-item">
                    <p> Task 1 </p>
                    <button className="edit-todo-button">Edit</button>
                    <button className="delete-todo-button">Delete</button>
                    <button className="done-todo-button">Done</button>
                </div>
            </div>
        </div>
    </div>
}

export default TodoApp
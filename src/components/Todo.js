import React from "react";

function Todo({description, todos, setTodos, todo}) {

    function deleteTodo(){
        setTodos(todos.filter((el) =>
            el.id !== todo.id
        ))
    }

    return <div>
            <div className="todo-item">
                <p> {description} </p>
                <button className="edit-todo-button">Edit</button>
                <button className="delete-todo-button" onClick={deleteTodo}>Delete</button>
                <button className="done-todo-button">Done</button>
            </div>
    </div>

}

export default Todo;
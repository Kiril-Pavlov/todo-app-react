import React from "react";

function Todo({description, todos, setTodos, todo}) {

    function deleteTodo(){
        setTodos(todos.filter((el) =>
            el.id !== todo.id
        ))
    }

    function doneTodo(){
        setTodos(todos.map((item)=>{
            if(item.id === todo.id){
                return {
                    ...item, completed:!item.completed
                }
            }
            return item;
        }))
    }

    // {`todo-item ${todo.category === "work" ? "todo-work" : ''}`}

    return <div>
            <div className={`todo-item ${todo.category === "work" ? "todo-work" : ''} ${todo.category === "personal" ? "todo-personal" : ''} ${todo.category === "wishlist" ? "todo-wishlist" : ''}`}>
                <p className={`${todo.completed ? "completed" : ''}`}> {description} </p>
                <button className="edit-todo-button">Edit</button>
                <button className="delete-todo-button" onClick={deleteTodo}>Delete</button>
                <button className="done-todo-button" onClick={doneTodo}>Done</button>
            </div>
    </div>

}

export default Todo;
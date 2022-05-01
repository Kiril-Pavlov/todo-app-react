import React from "react";

//components
import Todo from "./Todo";


function TodoList({todos, setTodos}){


    return <div>
        <div className="todos-list">
            {todos.map(todo =>(
                <Todo 
                    description={todo.description}
                    key={todo.id}
                    todos={todos}
                    todo={todo}
                    setTodos={setTodos}
                />
            ))}
        </div>
    </div>
}

export default TodoList
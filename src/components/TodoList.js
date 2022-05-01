import React from "react";

//components
import Todo from "./Todo";


function TodoList({todos}){


    return <div>
        <div className="todos-list">
            {todos.map(todo =>(
                <Todo 
                    description={todo.description}
                    key={todo.id}

                />
            ))}
        </div>
    </div>
}

export default TodoList
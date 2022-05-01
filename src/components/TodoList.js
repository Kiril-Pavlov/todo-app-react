import React from "react";

//components
import Todo from "./Todo";


function TodoList({todos, setTodos, filteredTodos}){


    return <div>
        <div className="todos-list">
            {filteredTodos.map(todo =>(
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
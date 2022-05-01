import React, { useState } from "react";

function TodoInput({todoDescription, setTodoDescription, todos,setTodos}) {
    const [counter, setCounter] =useState(1);


    function updateTodoDescription(event){
        //console.log(event.target.value);
        setTodoDescription(event.target.value)
    }

    function addTodo(event){
        event.preventDefault();
        setTodos([
            ...todos,
            {
                id: counter,
                description: todoDescription,
                completed: false
            }
        ])
        setTodoDescription("")
        setCounter(counter+1)
    }


    return <div>

        <div className="input-container">
            <input value={todoDescription} onChange={updateTodoDescription} type="text" />
            <button onClick={addTodo}>Add task</button>
        </div>


    </div>
}

export default TodoInput
import React, { useState } from "react";

function TodoInput({todoDescription, setTodoDescription, todos,setTodos, setFilter}) {
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

    function filterTodos(event){
        setFilter(event.target.value)
    }

    return <div>

        <div className="input-container">
            <input value={todoDescription} onChange={updateTodoDescription} type="text" />
            <button onClick={addTodo}>Add task</button>
            <select onChange={filterTodos} name="filters" className="filter-category-todos">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>


    </div>
}

export default TodoInput
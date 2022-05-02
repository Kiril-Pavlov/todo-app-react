import React, { useState } from "react";

function TodoInput({todoDescription, setTodoDescription, todos,setTodos, setFilter, todoCategory, setTodoCategory}) {
    const [counter, setCounter] =useState(1);


    function updateTodoDescription(event){
        //console.log(event.target.value);
        setTodoDescription(event.target.value)
    }

    function updateTodoCategory(event){
        console.log(event.target.value);
        setTodoCategory(event.target.value)
    }

    function addTodo(event){
        event.preventDefault();
        setTodos([
            ...todos,
            {
                id: Math.random()*1000,
                description: todoDescription,
                completed: false,
                category: todoCategory
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
            <select onChange={updateTodoCategory} value={todoCategory} name="category" className="select-category-todos">
                <option value="all">All</option>
                <option value="work">Work</option>
                <option value="personal">Personal</option>
                <option value="wishlist">Wishlist</option>
            </select>
            <button onClick={addTodo}>Add task</button>
        </div>
        <div className="filters-container">
            <p>Filter the todos:</p>
            <select onChange={filterTodos} name="filters" className="filter-category-todos">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
            


    </div>
}

export default TodoInput
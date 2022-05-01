import './App.css';
import React,{useState, useEffect} from 'react';

//components
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  //states
  const [todoDescription, setTodoDescription] = useState("");
  const [todos,setTodos]= useState([]);
  const [filter,setFilter] = useState("all");
  const [filteredTodos,setFilteredTodos] = useState([])

  useEffect(function(){
    //console.log("hey al")
    getLocalStorage();
  },[])

  useEffect(function(){
    filterHandler();
    saveLocalStorage();
  },[todos ,filter])

  function filterHandler(){
    switch(filter){
      case 'completed':
        setFilteredTodos(todos.filter(todo=> todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo=> todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  function saveLocalStorage(){
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function getLocalStorage(){
    console.log(localStorage.getItem("todos"))
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      //console.log(todoLocal)
      setTodos(todoLocal);
    }
  }

  return (
    <div className="App">
      <div className="main-container">
        <TodoInput 
          todoDescription={todoDescription} 
          setTodoDescription={setTodoDescription} 
          todos={todos} 
          setTodos={setTodos}
          setFilter={setFilter}
        />
        <TodoList 
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
        />
      </div>

    </div>
  );
}

export default App;

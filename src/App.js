import './App.css';
import React,{useState} from 'react';

//components
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Todo from './components/Todo';

function App() {
  const [todoDescription, setTodoDescription] = useState("");
  const [todos,setTodos]= useState([]);


  return (
    <div className="App">
      <div className="main-container">
        <TodoInput 
          todoDescription={todoDescription} 
          setTodoDescription={setTodoDescription} 
          todos={todos} 
          setTodos={setTodos}/>
        <TodoList 
          todos={todos}
          setTodos={setTodos}
        />
      </div>

    </div>
  );
}

export default App;

import React from "react";
import AddTodo from './components/AddTodo';
import EditTodo from './components/EditTodo';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <h1>My Tasks</h1>
      <AddTodo />
      <EditTodo />
      <TodoList />
    </div>
  );
}

export default App;

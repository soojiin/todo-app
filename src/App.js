import React from "react";
import { Routes, Route } from 'react-router-dom';
import Todo from './components/Todo/Todo';
import Calendar from './components/Calendar';
import Header from "./components/Header";
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Todo />}></Route>
        <Route path="/calendar" element={<Calendar />}></Route>
      </Routes>

    </div>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { Todos } from "./components/Todos";
import { useState, useEffect } from "react";
import Addtodos from "./components/Addtodos";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { TodoItems } from './components/TodoItems';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") == null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodos = {
      title: title,
      desc: desc,
      sno: sno,
    };
    setTodos([...todos, myTodos]);
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={false} />
        <Routes>
          <Route path="/" element={[<Addtodos addTodo={addTodo}/>,<Todos todos={todos} onDelete={onDelete} />]}/>
            <Route exact path="/about" element={<About/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

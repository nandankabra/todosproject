import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Header from './my components/Header';
import {Todos} from './my components/Todos';
import {Footer} from './my components/Footer';  
import { AddTodo } from './my components/AddTodo';
import React, { useState } from 'react';
function App() {

  const onDelete=(todo)=>{
    console.log("i am delete o todo" , todo);
    /* let index = todos.indexOf(todo);
    todos.splice(index , 1); */
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  const addTodo =(title , desc )=>{
    console.log("I am Adding Todo" , title , desc);
    let sno=todos[todos.length-1].sno + 1;
    const myTodo = {
      sno: sno,
      title : title,
      desc : desc,

    }
  }
  const [todos, setTodos] = useState([
    { 
      sno: 1,
      title:"Go to the market",
      desc:"You need to go to the market  to get this job done"
    },
    { 
      sno: 2,
      title:"Go to the mall",
      desc:"You need to go to the market  to get this job done2"
    },
    { 
      sno: 3,
      title:"Go to the ghat",
      desc:"You need to go to the market  to get this job done3"
    }
  ]);

  return (
    <>
      <Header title="My Todo List"  searchBar={false}/>
      {/* <AddTodo addTodo={addTodo} /> */}
      <Todos todos={todos} onDelete={onDelete}/>
    </>
  );
}
export default App;


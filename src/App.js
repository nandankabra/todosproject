import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Header from './my components/Header';
import {Todos} from './my components/Todos';
import {Footer} from './my components/Footer';  
import Test from './my components/Test';


function App() {
  const onDelete=(todo)=>{
    console.log("i am delete o todo" , todo);
  }
  let todos = [
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
  ]
  return (
    <>
      <Header title="My Todo List"  searchBar={false}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer />
    </>
  );
}
export default App;


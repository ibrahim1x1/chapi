import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import { ListUsers } from './Components/ListUsers';
import { NavUser } from './Components/Nav';

function App() {
  return (
    <div>
      <NavUser/>
    <ListUsers/>
    </div>
  );
}

export default App;

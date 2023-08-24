
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Containers from './Containers';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import CRUDContainers from './CRUDContainers';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar className='navbar-dark bg-dark'>
        <Container>
          <Navbar.Brand href="/">PROJETO CRUD</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/container">container</Nav.Link>
          </Nav>
        </Container>
        teste
      </Navbar>
    </div>
    <Routes>
      <Route path="/container" Component={Containers}/>
      <Route path="/cadastrar" Component={CRUDContainers}/>
    </Routes>
    </Router>
  );
}

export default App;

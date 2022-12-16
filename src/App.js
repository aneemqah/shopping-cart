import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from './pages/Store';

function App() {
  return (
    <Container>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route index element={<Store />}></Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;

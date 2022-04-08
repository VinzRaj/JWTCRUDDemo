import { Home } from './pages/homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/loginpage';
import { Register } from './pages/registerpage';
  //"proxy": "http://localhost:5000",

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

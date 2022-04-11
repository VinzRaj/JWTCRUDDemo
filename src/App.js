import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/loginpage';
import { Register } from './pages/registerpage';
import { Home } from './pages/homepage';
//"proxy": "http://localhost:5000",

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route index element={<Register />} />
        <Route path='login' element={<Login />} />
        <Route path='home' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

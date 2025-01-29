import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Loginservice from './components/Loginservice';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Home" element={<Loginservice />} >
            <Route path="/Home" element={<Home />} />
          </Route >
        </Routes>
      </Router >
    </>
  )
}

export default App

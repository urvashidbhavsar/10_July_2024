import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Login />} path="/"></Route>
          <Route element={<Register />} path="/Register"></Route>
          <Route element={<Home />} path="/Home"></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

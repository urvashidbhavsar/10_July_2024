import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Loginpage from './Component/Loginpage'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Dashboard from './Component/Dashboard'
import Loginservice from './Service/Loginservice'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Loginpage />}></Route>
          <Route path='/Dashboard' element={<Loginservice />}>
            <Route path='/Dashboard' element={<Dashboard />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

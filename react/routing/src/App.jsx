import './App.css'
import Navbar from './navbar/navbar'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path='/' element=""></Route>
          <Route exact path='/pages/About' element={<About />}></Route>
          <Route exact path='/pages/Contact' element={<Contact />}></Route>
        </Routes>
        {/* <About /> */}
        {/* <Contact /> */}
      </Router>
    </>
  )
}

export default App

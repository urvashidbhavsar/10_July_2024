import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './navbar/navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Ifstatement from './conditioanlRender/Ifstatement'
import Person from './search/Person'

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
      <Person />

      {/* <Ifstatement /> */}
    </>
  )
}

export default App

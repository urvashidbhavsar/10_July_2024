// import { Router } from 'react-router-dom'
import './App.css'
// import PassProp from './PassProp'
// import Images from './componate/Images'
// import Message from './Message'
import Navbar from './componate/navbar'
// import Filterex from './Filterex'
// import Setstateex from './Setstateex'
// import Userinput from './Userinput'
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  // function collectData(data){
  //   console.log(data)
  // }
  return (
    <>

      {/* <h1>Hello world</h1>
      <h1 className="text-3xl font-bold underline text-cyan-800">
        Hello world!
      </h1> */}
      {/* <Message /> */}

      {/* <Images/> */}
      {/* <Filterex /> */}
      {/* <Setstateex /> */}
      {/* <Userinput /> */}

      {/* <PassProp name={collectData}/> */}
      <Navbar />
      <Router>
        <Routes>
          <Route path="/pages/Contact" element={<Contact />} />
          <Route path="/pages/About" element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

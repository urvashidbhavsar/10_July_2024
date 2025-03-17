import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Todopage from './Pages/Todopage'
import Showtodos from './Pages/Showtodos'

const App = () => {
  return (
    <>
      <Todopage />
      <Showtodos />
    </>
  )
}

export default App

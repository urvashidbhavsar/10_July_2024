import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Todopage from './Pages/Todopage'
import Showtodos from './Pages/Showtodos'
import { Provider } from 'react-redux'
import { store } from './store/store'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Todopage />
        <Showtodos />
      </Provider>
    </>
  )
}

export default App

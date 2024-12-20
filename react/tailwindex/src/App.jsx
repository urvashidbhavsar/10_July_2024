import './App.css'
import PassProp from './PassProp'
// import Images from './componate/Images'
// import Message from './Message'
// import Navbar from './componate/navbar'
// import Filterex from './Filterex'
// import Setstateex from './Setstateex'
import Userinput from './Userinput'

function App() {
  function collectData(data){
    console.log(data)
  }
  return (
    <>
      {/* <Navbar /> */}
      {/* <h1>Hello world</h1>
      <h1 className="text-3xl font-bold underline text-cyan-800">
        Hello world!
      </h1> */}
      {/* <Message /> */}

      {/* <Images/> */}
      {/* <Filterex /> */}
      {/* <Setstateex /> */}
      <Userinput />

      <PassProp name={collectData}/>
    </>
  )
}

export default App

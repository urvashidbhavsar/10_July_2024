import './App.css';
import Nav from './header/nav';
// import Msg from './Msg';

function App() {
  // internal = create object for apply css
  const applyCss = {
    color: "white",
    backgroundColor: "#a345cc",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    fontSize: "20px",
  }

  return (
    <div>
      <Nav />
      {/* any function return in div section */}
      {/* <Msg /> */}

      {/* implement inline css */}
      <h1 style={{ color: "red", backgroundColor: "salmon", padding: "20px" }}>Hello world</h1>


      <p className='mytext'>this is a paragraph </p>

      <button style={applyCss}>Click Here</button>
    </div>
  );
}

export default App;

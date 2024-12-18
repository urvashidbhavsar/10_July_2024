import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Msg from './componate/msg.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <div className="images" >
      <Msg url="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" text = "image1"></Msg>
      <Msg url="https://img.freepik.com/free-photo/amazing-ants-carry-fruit-heavier-than-their-bodies-amazing-strong-ant_488145-2669.jpg" text="image2"></Msg>
      <Msg url="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg" text="image3"></Msg>
    </div> */}
    {/* <Msg/> */}
  </StrictMode>,
)

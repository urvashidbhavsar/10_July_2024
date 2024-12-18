import React from 'react'
import Image from '../assets/top-section-bg.jpeg'

function msg({ url, text }) {
  // function kashmir(){
  //   console.log("hello kashmir")
  // }
  const kashmir = (e) => {
    // event object
    e.preventDefault()
    console.log(e)
  }
  return (
    <>

      {/* <img src="../src/assets/top-section-bg.jpeg" alt="" /> */}

      <img src={Image} alt="" />

      {/* <img src={url} alt="" />
      <p>{text}</p> */}
      <input type="text" name="" id="" onKeyDown={kashmir} />
      {/* <button className='bg-black text-white p-2' onClick={kashmir} >Click Here</button> */}


      {/* <h1>{props.name} </h1>
    <p> {props.text}</p> */}

    </>
  )
}

export default msg


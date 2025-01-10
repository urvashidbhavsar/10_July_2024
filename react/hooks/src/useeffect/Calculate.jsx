import React, { useEffect, useState } from 'react'

const Calculate = () => {
    const [count,setCount] = useState(0)
    const [Calc,setCalc] = useState(0)

    useEffect(()=>{
        setCalc(()=>count*2)
    })

    // create function to call on button
    let changes = () =>{
        setCount(count +1)
    }
  return (
    <>
    <button onClick={changes}>Click to change</button>
        <p>{count} * 2 = {Calc}</p>
    </>
  )
}

export default Calculate

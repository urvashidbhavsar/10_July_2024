import React, { useEffect, useState } from 'react'

const Timer = () => {
    let [count, setCount] = useState(0)

    useEffect(()=>{
        setTimeout(() => {
            setCount(count + 1)
        }, 1000);
    },[])
  return (
    <>
      <p>Count : {count}</p>
    </>
  )
}

export default Timer

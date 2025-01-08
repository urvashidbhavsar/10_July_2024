import React, { useState } from 'react'

const UseStateEx = () => {
    const [count, setCount] = useState(0)

    const decrement = () => {
        setCount(count - 1)
    }
    // const increment = () =>{
    //     setCount(count + 1)
    // }
    return (
        <>
            {/* by function */}
            <button onClick={decrement}>Decrement</button>
            {/* directly */}
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>{count}</p>
        </>
    )
}

export default UseStateEx

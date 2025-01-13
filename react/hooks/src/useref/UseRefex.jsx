import React, { useEffect, useRef, useState } from 'react'

const UseRefex = () => {
    const [input, setInput] = useState("")
    const count = useRef(0)

    useEffect(() => {
        count.current = count.current + 1
    })
    const changes = (e) => {
        setInput(e.target.value)
    }
    return (
        <>
            <input type="text" value={input} onChange={changes} />
            <p>{count.current}</p>
        </>
    )
}

export default UseRefex

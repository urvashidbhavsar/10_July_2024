import React, { useReducer } from 'react'

const initvalue = 0
const reducer = (state, action) => {
    switch (action) {
        case "add":
            return state + 1;
        case "subtract":
            return state - 1;
        case "multiply":
            return state * 2
        case "divide":
            return state / 2
        case "reset":
            return 0
        default:
            throw new Error("undefined")
    }
}

const Mathex = () => {
    const [count, dispatch] = useReducer(reducer, initvalue)
    return (
        <div>
            <button onClick={() => dispatch("add")}>Add</button>
            <button onClick={() => dispatch("subtract")}>Subtract</button>
            <button onClick={() => dispatch("multiply")}>Multiply</button>
            <button onClick={() => dispatch("divide")}>Divide</button>
            <button onClick={() => dispatch("reset")}>Reset</button>
            <p>{count}</p>
        </div>
    )
}

export default Mathex

import React, { useState } from 'react'

const Arithmetic = () => {
    const [input, setInput] = useState({
        num1: "",
        num2: ""
    });

    const [result, setResult] = useState(null)

    const setvalue = (e) => {
        const { name, value } = e.target;
        setInput((set) => ({ ...set, [name]: value }))
        // setInput(...input, [e.target.name], [e.target.value])
    }

    const addition = (e) => {
        e.preventDefault()
        const num1 = parseFloat(input.num1)
        const num2 = parseFloat(input.num2)
        setResult(num1 + num2)
    }
    return (
        <>
            <form action="#">
                <input type="text" name='num1' value={input.num1} onChange={setvalue} placeholder='Enter 1st value' /> <br /><br />

                <input type="text" name='num2' value={input.num2} onChange={setvalue} placeholder='Enter 2nd value' />
                <br /><br />

                <button onClick={addition}>Add</button>
            </form>
            <p>Answer is : {result}</p>
        </>
    )
}

export default Arithmetic

import React, { useState } from 'react'
import { addTodo } from '../Feature/todoslice'
import { useDispatch } from 'react-redux'

const Todopage = () => {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        alert("Data added successfully");
        setInput("")
    }

    return (
        <>
            <div className="container py-2">
                <div className="row">
                    <div className="col-8">
                        <input type="text" name="" id="" placeholder='Enter Todos........' className='form-control' value={input} onChange={(e) => setInput(e.target.value)} />
                    </div>
                    <div className="col-4">
                        <button className='btn btn-primary' onClick={handleSubmit}>Add todo</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todopage

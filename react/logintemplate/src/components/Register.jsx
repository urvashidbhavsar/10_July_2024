import React, { useState } from 'react'
import { BrowserRouter as Router, Link, useNavigate } from 'react-router-dom'

const Register = () => {
    let navigate = useNavigate()
    const [input, setInput] = useState({
        username: "",
        email: "",
        password: ""
    })

    const handleEvent = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const storeData = (e) => {
        // e.preventDefault()
        let users = JSON.parse(localStorage.getItem("uservalue")) || []
        let existing = [...users, input]
        localStorage.setItem("uservalue", JSON.stringify(existing))
        navigate("/")
    }

    return (
        <>
            <div className='container mt-5'>
                <form onSubmit={storeData} className='w-50 shadow p-3 m-auto mt-5'>
                    <h2>Registration</h2>
                    <div className="row g-3">
                        <div className='col-12'>
                            <input type="text" placeholder='Username' className='form-control' required onChange={handleEvent} name="username" value={input.username} />
                        </div>
                        <div className="col-12">
                            <input type="text" placeholder='Email' className='form-control' required onChange={handleEvent} name="email" value={input.email} />
                        </div>
                        <div className="col-12">
                            <input type="password" placeholder='Password' className='form-control' required onChange={handleEvent} name="password" value={input.password} />
                        </div>
                        <div className='col-12'>
                            <button className='btn btn-primary'>Login</button>
                        </div>
                        <div className="col-12">
                            Have already account? <Link to="/">Login</Link>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register

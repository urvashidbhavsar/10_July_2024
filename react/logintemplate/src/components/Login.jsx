import React, { useState } from 'react'
import { BrowserRouter as Router, Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: ""
    })
    const changeText = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const handleLogin = (e) => {
        e.preventDefault()
        const getdata = JSON.parse(localStorage.getItem("uservalue")) || []

        if (input.email.toLowerCase() == getdata.email && input.password.toLowerCase() === getdata.pass) {
            alert("login")
        } else {
            alert("invalid")
        }
    }


    return (
        <>
            <div className='container mt-5 py-5'>
                <form onSubmit={handleLogin} className='w-50 shadow p-3 m-auto mt-5'>
                    <h2>Login</h2>
                    <div className="row g-3">
                        <div className="col-12">
                            <input type="text" placeholder='Email' className='form-control' required onChange={changeText} name="email" id="email" value={input.email} />
                        </div>
                        <div className="col-12">
                            <input type="text" placeholder='Password' className='form-control' required onChange={changeText} name="password" value={input.password} id="password" />
                        </div>
                        <div className='col-12'>
                            <button className='btn btn-primary'>Login</button>
                        </div>
                        <div className="col-12">
                            New User? <Link to="/register">Register</Link>
                        </div>
                    </div>
                </form >
            </div >
        </>
    )
}

export default Login

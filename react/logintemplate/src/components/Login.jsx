import React, { useState } from 'react'
import { BrowserRouter as Router, Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [usernamee, setUsername] = useState("")
    // const [input, setInput] = useState({
    //     email: "",
    //     password: ""
    // })

    // const changeText = (e) => {
    //     setInput({ ...input, [e.target.name]: e.target.value })
    // }

    const handleLogin = (e) => {
        e.preventDefault()
        const getdata = JSON.parse(localStorage.getItem("uservalue")) || []
        const user = getdata.find(user => user.username === usernamee && user.password === pass);

        if (user) {
            localStorage.setItem("loginuser", usernamee)
            navigate("/Home")
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
                            <input type="text" placeholder='Username' className='form-control' required onChange={(e) => setUsername(e.target.value)} name="text" id="email" value={usernamee} />
                        </div>
                        <div className="col-12">
                            <input type="text" placeholder='Password' className='form-control' required onChange={(e) => setPass(e.target.value)} name="password" value={pass} id="password" />
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

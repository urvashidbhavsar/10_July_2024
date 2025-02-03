import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Loginpage = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [pass, setPass] = useState("")

    localStorage.setItem("Adminlogin", JSON.stringify({
        username: "admin",
        password: "admin",
    }))
    const getData = JSON.parse(localStorage.getItem("Adminlogin"))

    const handleLogin = (e) => {
        if (getData.username === username && getData.password === pass) {
            localStorage.setItem("loginuser", username)
            navigate("/Dashboard")
        } else {
            alert("invalid")
        }
    }
    return (
        <>
            <div className='container mt-5 py-5'>
                <form onSubmit={handleLogin} className='w-50 shadow p-3 m-auto mt-5' method='post'>
                    <h2>Login</h2>
                    <div className="row g-3">
                        <div className="col-12">
                            <input type="text" placeholder='Username' className='form-control' required onChange={(e) => setUsername(e.target.value)} name="text" id="uname" value={username} />
                        </div>
                        <div className="col-12">
                            <input type="text" placeholder='Password' className='form-control' required onChange={(e) => setPass(e.target.value)} name="password" value={pass} id="password" />
                        </div>
                        <div className='col-12'>
                            <button className='btn btn-primary'>Login</button>
                        </div>
                    </div>
                </form >
            </div >
        </>
    )
}

export default Loginpage

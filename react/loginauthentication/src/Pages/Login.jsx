import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
    const navigate = useNavigate()
    const [email, getEmail] = useState("")
    const [password, getPassword] = useState("")

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/Home")
        } catch (e) {
            console.log(e);
            alert("Invalid value")
        }
    }
    return (
        <>
            <div className='container'>
                <form className="w-50 border-2 border-dark border p-3 m-auto mt-5" onSubmit={handleLogin}>
                    <div className="row g-3">
                        <div className="col-12">
                            <input type="text" name="" placeholder='Email Address' className='form-control' value={email} onChange={(e) => getEmail(e.target.value)} />
                        </div>
                        <div className="col-12">
                            <input type="text" name="" placeholder='Password' className='form-control' value={password} onChange={(e) => getPassword(e.target.value)} />
                        </div>
                        <div className="col-12">
                            <button className='btn btn-primary'>Login</button>
                        </div>
                        <div className="col-12">
                            <p>New User? <Link to="/Register">Register</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login

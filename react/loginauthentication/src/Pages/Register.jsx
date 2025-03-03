import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { db } from '../firebase'
import { setDoc, doc } from 'firebase/firestore'

const Register = () => {
    const [name, getName] = useState("")
    const [email, getEmail] = useState("")
    const [password, getPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            const user = auth.currentUser;
            console.log(user);

            if (user) {
                await setDoc(doc(db, "users", user.uid), {
                    email: user.email,
                    name: name,
                })
                alert("Register Successfully!!!")
            }
        } catch (e) {
            console.log(e)
            alert("Invalid Creadential or Email id already Exist")
        }
    }

    return (
        <>
            <div className='container'>
                <form className="w-50 border-2 border-dark border p-3 m-auto mt-5" onSubmit={handleSubmit}>
                    <div className="row g-3">
                        <div className="col-12">
                            <input type="text" name="" placeholder='Name' className='form-control' value={name} onChange={(e) => getName(e.target.value)} />
                        </div>
                        <div className="col-12">
                            <input type="text" name="" placeholder='Email Address' className='form-control' value={email} onChange={(e) => getEmail(e.target.value)} />
                        </div>
                        <div className="col-12">
                            <input type="text" name="" placeholder='Password' className='form-control' value={password} onChange={(e) => getPassword(e.target.value)} />
                        </div>
                        <div className="col-12">
                            <button className='btn btn-primary'>Register</button>
                        </div>
                        <div className="col-12">
                            <p>Already have account?
                                <Link to="/">Login</Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register

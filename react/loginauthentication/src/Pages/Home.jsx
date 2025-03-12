import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import { auth } from '../firebase'
import { getDoc, doc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const [userdetails, getUser] = useState(null);

    useEffect(() => {
        const fetchdata = async () => {
            const user = auth.currentUser;
            if (user) {
                const userdata = await getDoc(doc(db, "users", user.uid))
                if (userdata.exists()) {
                    getUser(userdata.data())
                    console.log(userdata.data());
                }
            }
        }
        fetchdata()
    }, [])

    const logout = async () => {
        try {
            await auth.signOut()
            navigate("/")
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <>
            {
                userdetails ?
                    <h1>{userdetails.name} ,Welcome to home page</h1>
                    :
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
            }
            <br />
            <button onClick={logout} className='btn btn-danger'>Logout</button>
        </>
    )
}

export default Home

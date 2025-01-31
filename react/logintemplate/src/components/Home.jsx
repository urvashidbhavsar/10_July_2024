import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    let user = localStorage.getItem("loginuser")
    console.log(user);

    const logout = () => {
        localStorage.removeItem("loginuser")
        navigate("/")
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Homepage</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end align-items-center" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 gap-2 ">
                            <h4 className='m-0 lh-base'>Hello, {user}</h4>

                            <button className='btn btn-danger' onClick={logout}>Logout</button>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Home

import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate()
    const adminlog = localStorage.getItem("loginuser")

    const logout = () => {
        localStorage.removeItem("loginuser")
        navigate("/")
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end gap-5" id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Product</a>
                            </li>
                        </ul>
                        <div className='d-flex align-align-items-center gap-3'>
                            <h5 className='m-0 lh-base'>Welcome {adminlog}</h5>
                            <button className='btn btn-danger' onClick={logout}>Logout</button>
                        </div>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Dashboard

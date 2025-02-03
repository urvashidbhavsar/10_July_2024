import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Navigation = () => {
    const navigate = useNavigate()
    const adminlog = localStorage.getItem("loginuser")

    const logout = () => {
        localStorage.removeItem("loginuser")
        navigate("/")
    }

    const navlink = [
        { pathurl: "/Dashboard", pathname: "Home" },
        { pathurl: "/Product", pathname: "Product" },
    ]
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Admin Dashboard</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end gap-5" id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-2 mb-lg-0">
                            {
                                navlink.map(items =>
                                    <li className="nav-item" key={items.pathurl}>
                                        <Link className="nav-link" to={items.pathurl}>
                                            {items.pathname}
                                        </Link>
                                    </li>
                                )
                            }
                        </ul>
                        <div className='d-flex align-align-items-center gap-3'>
                            <h5 className='m-0 lh-base'>Welcome {adminlog}</h5>
                            <button className='btn btn-danger' onClick={logout}>Logout</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation

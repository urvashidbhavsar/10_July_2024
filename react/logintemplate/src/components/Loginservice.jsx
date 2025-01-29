import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

const Loginservice = () => {
    const auth = localStorage.getItem("loginuser")
    return auth ? <Outlet /> : <Navigate to="/" />
}

export default Loginservice

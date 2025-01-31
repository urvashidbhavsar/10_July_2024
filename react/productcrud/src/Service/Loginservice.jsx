import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Loginservice = () => {
    let auth = localStorage.getItem("loginuser")
    return auth ? <Outlet /> : <Navigate to="/" />
}

export default Loginservice

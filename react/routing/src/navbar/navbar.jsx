import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom'

const navbar = () => {
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="pages/About">About</Link></li>
                <li><Link to="pages/Contact">Contact</Link></li>
            </ul>
        </>
    )
}

export default navbar

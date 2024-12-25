import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom'

const navbar = () => {
    var menu = [
        { name: "Home", path: "/" },
        { name: "About", path: "pages/About" },
        { name: "Contact", path: "pages/Contact" },
    ]
    return (
        <>
            <ul>
                {
                    menu.map((items, key) =>
                        // console.log(key, items.path)
                        <li key={key}><Link to={items.path}>{items.name}</Link></li>
                    )
                }

                {/* <li><Link to="/">Home</Link></li>
                <li><Link to="pages/About">About</Link></li>
                <li><Link to="pages/Contact">Contact</Link></li> */}
            </ul>
        </>
    )
}

export default navbar

import React from 'react'
import About from '../pages/About';
import Contact from '../pages/Contact';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const nav = () => {
    let mymenu = [
        { path: "/pages/About", element: <About /> },
        { path: "/pages/Contact", element: <Contact /> },
    ]
    return (
        <>
            <div className="nav">
                <Router>
                    <ul className='flex gap-3'>
                        <li><Link to="/pages/About">About</Link></li>
                        <li><Link to="/pages/Contact">Contact</Link></li>
                        {/* {
                            mymenu.map((items, key) =>
                                <li key={key} className='p-2' to={items.path}>
                                    <Link>{items}</Link>
                                </li>
                            )
                        } */}
                    </ul>
                </Router>
            </div>
        </>
    )
}

export default nav

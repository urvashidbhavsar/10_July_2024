import React from 'react';
import './navbar.css'
import Logo from './logo';
import Nav from './nav';

const navbar = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="navbar">
                        <Logo />
                        <div className="nav">
                            <Nav />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default navbar

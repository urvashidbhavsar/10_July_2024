import React from 'react'

const nav = () => {
    let menuItems = ["Home", "About", "Services", "Pages", "Contact"]
    return (
        <>
            <ul>
                {
                    menuItems.map(item =>
                        <li><a href="">{item}</a></li>
                    )
                }
            </ul>
        </>
    )
}

export default nav

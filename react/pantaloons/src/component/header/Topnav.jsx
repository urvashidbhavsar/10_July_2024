import React from 'react'

const Topnav = () => {
    const linktag = {
        color: "white",
        fontSize: "12px",
        letterSpacing: "1px",
        textTransform: "uppercase"
    }
    const borderline = {
        borderRight: "1px solid white",
        paddingRight: "15px"
    }
    let topmenus = ["greencard", "gift card", "store locator", "track order", "contact"]

    return (
        <>
            <ul className='d-flex gap-3 m-0 py-1'>
                {
                    topmenus.map((items, k) =>
                        <li key={k} style={borderline}>
                            <a href="" style={linktag}>{items}</a>
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default Topnav

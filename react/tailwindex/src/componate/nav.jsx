import React from 'react'

const nav = ({ MenuItems }) => {
    return (
        <>
            <div className="nav">
                <ul className='flex gap-3'>
                    {
                        MenuItems.map((items, key) =>
                            <li key={key} className='p-2'><a href="">{items}</a></li>
                        )
                    }
                </ul>
            </div>
        </>
    )
}

export default nav

import React from 'react'

function Showmsg() {
    alert("Hello world")
}

const eventex = () => {
    return (
        <>
            <button className='bg-lime-700' onClick={Showmsg}>Click Here</button>
        </>
    )
}

export default eventex

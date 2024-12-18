import React from 'react'
import Logo from './Logo'
import Nav from './nav'

function navbar({ MenuItems }) {
  let mymenu = ["Home", "Pages", "Blog", "About", "Contact"]
  return (
    <>
      <header className='bg-red-200'>
        <div className="container m-auto">
          <div className="navbar flex justify-between py-3">
            <Logo />
            <Nav MenuItems={mymenu} />
          </div>
        </div>
      </header>
    </>
  )
}

export default navbar

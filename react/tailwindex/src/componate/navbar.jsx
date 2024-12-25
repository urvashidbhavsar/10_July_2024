import React from 'react'
import Logo from './Logo'
import Nav from './nav'

function navbar() {

  return (
    <>
      <header className='bg-red-200'>
        <div className="container m-auto">
          <div className="navbar flex justify-between py-3">
            <Logo />
            <Nav />
          </div>
        </div>
      </header>
    </>
  )
}

export default navbar

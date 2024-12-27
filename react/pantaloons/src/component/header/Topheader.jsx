import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore } from '@fortawesome/free-solid-svg-icons'
import { Container } from 'react-bootstrap';
import Topnav from './Topnav';
import Tagline from './Tagline';
import Navbar from './Minnavbar';

const Topheader = () => {

    return (
        <>
            <section className='bg-dark'>
                <Container>
                    <div className="topbar d-flex justify-content-between align-items-center">
                        <Topnav />
                        <div className='store text-white d-flex gap-2 align-items-center'>
                            <FontAwesomeIcon icon={faStore} />
                            Store
                        </div>
                    </div>
                </Container>
            </section>
            <Tagline />
            <Navbar />
        </>
    )
}

export default Topheader

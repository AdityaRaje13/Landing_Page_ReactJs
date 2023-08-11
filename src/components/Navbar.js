import React from 'react';

export default function Navbar() {
    return (
        <>

            <nav className='d-flex justify-content-between align-items-center py-2 px-5' >

                <div className="logo">
                    <img src="/images/logo512.png" width={'100px'} height={'50px'}/>
                </div>

                <div className="menu">
                    <ul>
                        <li>Menu</li>
                        <li>Location</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className="login">
                    <button className='btn btn-danger'>Login</button>
                </div>

            </nav>

        </>
    )
}

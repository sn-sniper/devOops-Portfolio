import React from 'react'
import Btnt from './ui/btns/btn-t'
import Separator from './ui/Separator/Separator'
import "../styles/Navbar.css"
function Navbar() {
    return (
        <>
            <div className='Navbar-container'>
                <h1 className='logo'>devOops</h1>
                <ul className='nav-list'>
                    <li className='nav-item' data-title="Home"><span>Home</span></li>
                    <Separator/>
                    <li className='nav-item' data-title="About"><span>About</span></li>
                    <Separator/>
                    <li className='nav-item' data-title="Services"><span>Services</span></li>
                    <Separator />
                    <li className='nav-item' data-title="Contact"><span>Contact</span></li>
                </ul>
                <Btnt bg={false} text="get in touch" border={true}/>
            </div>
        </>
    )
}

export default Navbar
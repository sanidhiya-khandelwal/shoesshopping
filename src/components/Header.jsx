import React from 'react'
// import { Magnify, Heart, Cart } from '../assets/Icons'
const Header = () => {

    return (
        <>
            <div className='header'>
                <div>
                    <img style={{ width: "50px" }} src="/src/assets/Logo.png" alt="logo" />
                </div>
                <div>
                    <a href="#"><img className="headerimg" style={{ width: "20px" }} src="/src/assets/magnify.png" alt="" /></a> &nbsp;
                    <a href="#"><img className="headerimg" style={{ width: "20px" }} src="/src/assets/heart.jpg" alt="" /></a> &nbsp;
                    <a href="#"><img className="headerimg" style={{ width: "20px" }} src="/src/assets/cart.jpg" alt="" /> </a> &nbsp;
                </div>
            </div>

        </>

    )
}

export default Header;

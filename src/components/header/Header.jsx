import React from 'react'

import './header.css'
import CTA from './CTA'
import ME from "../../assets/mo.jpg"
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
        <div className='container header__container'>
            <h5> Hello I'm </h5>
            <h1> Mogess Mekonnen</h1>
            <h5 className="text-light"> Backend Developer</h5>
            <CTA  />

            <HeaderSocials  />

            <div className="me">
                <img src={ME} alt="" />
            </div>

            <a href='#contact' className='scroll_down'>Scroll Dwon</a>
        </div>
    )
}

export default Header
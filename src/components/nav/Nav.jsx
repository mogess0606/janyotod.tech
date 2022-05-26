import React from 'react'
import './nav.css'

import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (          
        <nav>
            <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active':''  } ><AiOutlineHome/></a>
            <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active':''  } ><AiOutlineUser/></a>
            <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active':''  } ><BiBook/></a>
            <a href='#service' onClick={() => setActiveNav('#service')} className={activeNav === '#service' ? 'active':''  } ><RiServiceLine/></a>
            <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active':''  } ><BiMessageSquareDetail/></a>
            <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active':''  } ><AiOutlineHome/></a>
            <a href='#comprised' onClick={() => setActiveNav('#comprised')} className={activeNav === '#comprised' ? 'active':''  } ><AiOutlineHome/></a>
            <a href='#testimonials' onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active':''  } ><AiOutlineHome/></a>
        </nav>
    )
}

export default Nav
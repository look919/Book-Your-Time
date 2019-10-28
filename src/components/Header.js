import React from 'react'

import {BookIcon} from '../icons/icons'


const Header = () => (

    <header className="header" style={{backgroundImage: 'url(' + require('../img/background-header.jpg') + ')'}}>
        <label className="header__label">
            <BookIcon />
            <span className="header__text">Book Your Time</span>
            <BookIcon />
        </label>      
    </header>
)
    

export default Header
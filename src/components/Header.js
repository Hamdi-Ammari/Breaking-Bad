import React from 'react';
import Logo from '../seriesImage/logo.png';

const Header = () => {
    return (
        <header className='theHeader'>
           <img className='HeaderImg' src={Logo} alt='Breaking Bad'/>
        </header>
    )
}

export default Header;


import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <Link to='/'>Main</Link>
                <Link to='/volunteer'>Volunteer</Link>
            </nav>
        </div>
    );
};

export default Header;
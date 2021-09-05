import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class NavCard extends React.Component
{
    render(){
        return (
            <div className="nav-card">
                <ul className="nav-list">
                    <li><Link to='/projects'>Projekt</Link></li>
                    <li><Link to='/about'>Om mig</Link></li>
                    <li><Link to='/knowledge'>Kunskap</Link></li>
                    <li><Link to='/experiance'>Erfarenheter</Link></li>
                </ul>
             </div>
            )
    }
}

export default NavCard
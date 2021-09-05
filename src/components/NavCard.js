import React from 'react';
import axios from 'axios';
class NavCard extends React.Component
{
    render(){
        return (
            <div className="card">
                <ul className="nav-list">
                    <li>Projekt</li>
                    <li>Om mig</li>
                    <li>Kunskap</li>
                    <li>Erfarenheter</li>
                </ul>
             </div>
            )
    }
}

export default NavCard
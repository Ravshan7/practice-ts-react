import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper px1">
                <a href="#" className="brand-logo">React + TypeScript</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/" activeClassName='activeLink' exact>Главная</NavLink></li>
                    <li><NavLink to="/about" activeClassName='activeLink'>Информация</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
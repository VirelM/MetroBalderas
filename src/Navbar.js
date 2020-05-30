import React from 'react';
import {NavLink} from 'react-router-dom';
import './App.css'

export default class Navbar extends React.Component{
    render(){
        return(
            <header>
                <h1>Metro Balderas</h1>
                <nav>
                    <ul className="menu">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/menu">Menu</NavLink></li>
                        <li><NavLink to="locations">Location</NavLink></li>
                    </ul>
                </nav>
            </header>
        )
    }
}
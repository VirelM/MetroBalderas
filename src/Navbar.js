import React from 'react';
import {NavLink} from 'react-router-dom';
import './App.css'

export default class Navbar extends React.Component{
    render(){
        return(
            <header>
                <img alt="logo" className="logo" src="../img/MetroLogo.jpg"></img>
                <h1 className="h1Head">Metro Balderas</h1>
                <nav>
                    
                    <ul className="menu">
                        <li><NavLink to="/" className="NavLink">Home</NavLink></li>
                        <li><NavLink to="/menu" className="NavLink">Menu</NavLink></li>
                        <li><NavLink to="locations" className="NavLink">Location</NavLink></li>
                    </ul>
                </nav>
            </header>
        )
    }
}
import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Menu from './Menu';
import {Route} from 'react-router-dom';


export default class App extends React.Component{
  state = {
    english:{},
    spanish:[
      {
        name: 'Huvos con Salchicha',
        price: '$3.50'
      },
      {
        name:'Huevos con Jamon',
        price: '$3.50'
      },
      {
        name: 'Huevos a la Mexiacana',
        price:'$3.50',
      },
      {
        name: 'Huevos Rancheros',
        price: '$3.50'
      },
      {
        name: 'Huevos con Chorizo',
        price: '$3.50'
      },
      {
        name:'Huevos Estellados o Revueltos',
        price:'$3.00'
      },
      {
        name:'Chilaquiles con Bistec',
        price:'$4.75'
      },
      {
        name: 'Chilaquiles con Huevos',
        price:'$4.75'
      },
      {
        name:'Chilaquiles Solos',
        price: ' $3.25'
      },
      {
        name:'Enchiladas con Pollo',
        price: '$4.75'
      },
      {
        name:'Torta de Milanesa',
        price:'$3.60'
      },
      {
        name: 'Torta Balderas',
        price: '$4.50'
      }
    ]
  }

  render(){
    let menu= this.state.spanish;
    return(
    
      <div>
        <Route path="/" component={Navbar}></Route>
        <Route exact path="/menu" render={props=>
        <Menu {...props} menu={menu}></Menu>}/>
      </div>
    )
  }
}

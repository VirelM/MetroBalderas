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
        name: 'Huevos Rancheros',
        price: '$3.50',
        img: '../metrobalderas/desayRacheros-negro.jpg',
        cover: 'breakfast',
      },
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
        price:'$3.60',
        img: '../metrobalderas/pambazo.png',
        cover: 'Torta'
      },
      {
        name: 'Torta Balderas',
        price: '$4.50'
      },
      {
        name:'Hurache Bistec',
        price: '$4.25',
        img: '../metrobalderas/hurache de bistec.jpg',
        cover: 'Hurache'
      },
      {
        name:'Tacos de Asada',
        price:'$1.35',
        img: '../metrobalderas/taco carnitas.jpg',
        cover:'Taco'
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
        <img alt='pambazo' src="/public/metrobalderas/pambazo.png"></img>
      </div>
    )
  }
}

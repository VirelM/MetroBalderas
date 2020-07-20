import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Menu from './Menu';
import Breakfast from './Breakfast';
import {Route} from 'react-router-dom';


export default class App extends React.Component{
  state = {
    english:{},
    spanish:[
      {
        name:'Huevos Sencilos',
        price:'$3.00',
        img: '../img/desayEstrellados-anaranj(4).jpg',
        category:'breakfast'
      },
      {
        name: 'Huevos Rancheros',
        price: '$3.50',
        img: '../img/desayRacheros-negro.jpg',
        cover: 'breakfast',
        category:'breakfast'
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
        img: '../img/pambazo.jpg',
        cover: 'Tortas'
      },
      {
        name: 'Torta Balderas',
        price: '$4.50'
      },
      {
        name:'Hurache Bistec',
        price: '$4.25',
        img: '../img/huracheDeBistec.jpg',
        cover: 'Huraches'
      },
      {
        name:'Tacos de Asada',
        price:'$1.35',
        img: '../img/tacosCarnitas.jpg',
        cover:'Tacos'
      },
      {
        name:'Quesadilla de Queso',
        price:'$2.40',
        img: '../img/quesadilla.jpg',
        cover:'Quesadillas'
      },
      {
        name:'Sope de Asada',
        price:'$3.00',
        img: '../img/sopeAsada.jpg',
        cover: 'Sopes'
      },
      {
        name:'Flautas de Pollo',
        price:'$2.75',
        img: '../img/flautas-negro+completo(5).jpg',
        cover:'Flautas'
      },
      {
        name:'Chilaquiles con Huevo',
        price:'$4.75',
        img: '../img/chilaquilesConHuevo.jpg',
        cover:'Chilaquiles'
      },
      {
        name:'',
        price:'',
        img: '',
      },
      {
        name:'',
        price:'',
        img: '',
      },
      {
        name:'',
        price:'',
        img: '',
      },
      {
        name:'',
        price:'',
        img: '',
      },
      {
        name:'',
        price:'',
        img: '',
      },
      {
        name:'',
        price:'',
        img: '',
      },
      {
        name:'',
        price:'',
        img: '',
      },
      {
        name:'',
        price:'',
        img: '',
      },
      {
        name:'',
        price:'',
        img: '',
      },
      {
        name:'',
        price:'',
        img: '',
      },
      {
        name:'',
        price:'',
        img: '',
      },
      {
        name:'',
        price:'',
        img: '',
      },
      {
        name:'',
        price:'',
        img: '',
      },
      {
        name:'',
        price:'',
        img: '',
      },
      {
        name:'',
        price:'',
        img: '',
      },
      {
        name:'',
        price:'',
        img: '',
      },
      
    ]
  }

  render(){
    let menu= this.state.spanish;
    //public\metrobalderas\pambazo.png
    return(
    
      <div>
        <Route path="/" component={Navbar}></Route>
        <Route exact path="/menu" render={props=>
        <Menu {...props} menu={menu}></Menu>}/>
        <Route exact path="/menu/breakfast" render={props=>
        <Breakfast {...props} menu={menu}></Breakfast>}/>
      </div>
    )
  }
}

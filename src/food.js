import React from 'react';



export default class Food extends React.Component{
    render(){
        return(
            <li >{this.props.price} ${this.props.name}</li>
        )
    }
}
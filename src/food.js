import React from 'react';



export default class Food extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.img}></img>
            </div>
        )
    }
}
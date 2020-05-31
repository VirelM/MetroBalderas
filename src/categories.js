import React from 'react';



export default class Categories extends React.Component{
    render(){
        return(
            <div>
                {this.props.cover}
                <img alt="meaninful text" src={this.props.img}></img>
            </div>
        )
    }
}
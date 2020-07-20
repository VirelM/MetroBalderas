import React from 'react';
import {Link} from 'react-router-dom';


export default class Categories extends React.Component{
    render(){
        return(
            <div className="categoryItem">
                {this.props.cover}
                <Link to="/menu/breakfast">
                <img alt="meaninful text" className="menuCategories" src={this.props.img}></img>
                </Link>
                </div>
        )
    }
}
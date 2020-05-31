import React from 'react';
//import Food from './food';
import Categories from './categories';

export default class Menu extends React.Component{
    
    render(){
        //let menuFoodItems = this.props.menu.map((food,indx=>));
        let categoriesFiltered = this.props.menu.filter(function(category){
            if('cover' in category){
                return category
            }
        })
        console.log(categoriesFiltered);
        let categories = categoriesFiltered.map((food,indx)=> <Categories key={indx} cover={food.cover} img={food.img} id={indx}></Categories>)
        
        console.log(this.props);
        return(
            <div className="menu_container">
                {categories}
            </div>
        )
    }
}
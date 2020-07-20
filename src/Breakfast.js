import React from 'react';



export default class Breakfast extends React.Component{
    render(){
        let breakfast = this.props.menu.filter(food=> {
            if(food.category==="breakfast"){
                return food
            }
        });
        let breakfastItem = breakfast.map(item=><div><img className="menuCategories" alt="food" src={item.img}></img><p>{item.name}{item.price}</p></div>)
        return(
            <div className="menu_container">
                {breakfastItem}
            </div>
        )
    }
}
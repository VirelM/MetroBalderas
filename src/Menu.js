import React from 'react';
import Food from './food';


export default class Menu extends React.Component{
    
    render(){
        let menuFoodItems = this.props.menu.map((food,indx)=> <Food key={indx} name={food.name} price={food.price} id={indx}></Food>)
        
        console.log(this.props);
        return(
            <div className="menu_container">
                <h2>Breakfast</h2>
                <hr></hr>
                <ul>{menuFoodItems}</ul>
                {/* <ul className="breakfast1">
                    <li>$12.99 Huevos a la Mexicana 
                        <p>2 eggs(with diced onion, tomato, chili), black beans, 2 tortialls, and salad</p>
                    </li>
                    <li>$12.99 Huevos a la Mexicana 
                        <p>2 eggs(with diced onion, tomato, chili), black beans, 2 tortialls, and salad</p>
                    </li>
                    <li>$12.99 Huevos a la Mexicana 
                        <p>2 eggs(with diced onion, tomato, chili), black beans, 2 tortialls, and salad</p>
                    </li>
                    <li>$12.99 Huevos a la Mexicana 
                        <p>2 eggs(with diced onion, tomato, chili), black beans, 2 tortialls, and salad</p>
                    </li>
                </ul>
                <ul className="breakfast2">
                    <li>$12.99 Huevos a la Mexicana 
                        <p>2 eggs(with diced onion, tomato, chili), black beans, 2 tortialls, and salad</p>
                    </li>
                    <li>$12.99 Huevos a la Mexicana 
                        <p>2 eggs(with diced onion, tomato, chili), black beans, 2 tortialls, and salad</p>
                    </li>
                    <li>$12.99 Huevos a la Mexicana 
                        <p>2 eggs(with diced onion, tomato, chili), black beans, 2 tortialls, and salad</p>
                    </li>
                    <li>$12.99 Huevos a la Mexicana 
                        <p>2 eggs(with diced onion, tomato, chili), black beans, 2 tortialls, and salad</p>
                    </li>
                </ul> */}
            </div>
        )
    }
}
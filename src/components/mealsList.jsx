// import FoodListEntry from './FoodListEntry.jsx';
import React from 'react';
import {browseRoute} from 'react-router-dom';

class MealsList extends React.Component {

render(){
	
		return(
				<div>
					<ul>
						{
						this.props.meals.map(meal=>{
							return <li onClick={()=>alert(meal.name)}>
							{meal.name} { " the price : "} {meal.price}{'$'}
							</li> 
								})
						}
						</ul>
				</div>
		)
}
}
export default MealsList;
 



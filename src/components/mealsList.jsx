// import FoodListEntry from './FoodListEntry.jsx';
import React from 'react';

import {browseRoute} from 'react-router-dom';


 
class MealsList extends React.Component {

render(){
	console.log("ggggg")

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
 
// 		var mealsArr = meals.map(meal=> {
// 				if(meal.price <= this.state.Price) {
// 						var mealName = meal.name
// 				}

// 		return (<div><h5><em>FoodListEntry</em> <FoodListEntry meal = {[mealName]} /> </h5></div>)

// })

// 	return (
// 		<div>
// 			{mealsArr}
// 		</div>)

// }


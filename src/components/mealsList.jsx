// import FoodListEntry from './FoodListEntry.jsx';
import React from 'react';
import {browseRoute , map } from 'react-router-dom';

class MealsList extends React.Component {

render(props){
	
		return(
				<div>{
					this.props.meals.length > 0 ?
						
						<ul>
						{
							this.props.meals.map(meal=>{
								return <li onClick={()=>alert(meal.name)}>
							{meal.name} { " the price : "} {meal.price}{'$'}
							</li> 
								})
							}
						{/* {props.items.map((item, index) => (
							<il key={index} item={item} />
						))} */}
						</ul>:null
					
			}
				</div>
		)
  }
}
export default MealsList;
 



import React from 'react';
import {browseRoute} from 'react-router-dom';

class Resturant extends React.Component {

render(){
		return(
				<div>
					<ul>
						{
						this.props.meals.map(meal=> {
							return <li onClick={()=>alert(meal.resturant)}>
							{meal.resturant} { " the meal name "} {meal.price}{'$'}
							</li> 
								})
						}
						</ul>
				</div>
		)
}
}
export default Resturant;
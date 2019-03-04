import React from 'react';
import Card from './Card.js';

export const MiniCard = ({diomonds}) =>
 {
  return(	
		<div> 
		  	{
			  diomonds.map((users,i) =>
				{
			   return(<Card
					 key={i} 
					 path={diomonds[i].path} 
					 name={diomonds[i].name} 
					 price={diomonds[i].price} 
					 more_info={diomonds[i].more_info}
					 />)
              })
			}
	    </div>
	);
 }

export default MiniCard;
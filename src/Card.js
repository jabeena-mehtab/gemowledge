import React from 'react';
import 'tachyons';
import './index'


const Card =({ name,price,path,more_info}) =>
{
	return(
		<div width="250px" className="tc bg-light-green dib ma3 pa3 grow bw2 shadow-5">
		   <img alt='A robo friend' src={`${path} ?200x200`} />
		<div>
		  <h2>{name}</h2>
           <p>{price}</p>
           <p>{more_info}</p>
        </div>
     </div>
        );
}

export default Card;
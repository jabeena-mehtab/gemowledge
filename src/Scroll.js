import React from 'react';


const Scroll = (props) =>
{
	return(
			<div style={{overflowY:'Scroll' ,border:'3px solid black', height:'590px',margin:'10px'}}>
				{props.children}
			</div>
		)
} 

export default Scroll;
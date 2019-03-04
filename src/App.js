import React,{Component} from 'react';
import MiniCard from './MiniCard.js';
import diomonds from './diomonds';
import Searchbox from './Searchbox';
import './App.css';
import Scroll from './Scroll'


class App extends Component{ 
	constructor()
	{
		super();
		this.state=
		{
				diomonds:diomonds,
				searchfield:''
		}
	}
	onSearchChange = (event) =>
		{
			this.setState({searchfield:event.target.value})
	}

    render()
    {
    	const {diomonds,searchfield}= this.state; 
    	const filtered=diomonds.filter(diomonds=>
			{
				return (diomonds.name.toLowerCase().includes(searchfield.toLowerCase()));
			}
		)
		if (diomonds.length === 0)
			{
				return( <h1 className="tc">loading</h1>)
			}
		else{
    	return(
    		
			<div className="tc">
				<h1 className="f1">Gemowledge</h1>
				<Searchbox searchChange={this.onSearchChange}/>
			  <Scroll>	
				<MiniCard diomonds={filtered}/>
		  	  </Scroll>
		  	</div>
		  );
    	}
	}

}



export default App;
import React, { Component } from 'react';
import SearchBar from '../search-bar/search-bar';
import Gif from '../gif/gif';
import GifList from '../gif-list/gif-list';

import './app.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	searchOutput: null
    };
	}

	retrieveSearchOutput = (output) => {
		if (output.length === 0) {
			this.setState({
				searchOutput: null,
				selectedGif: null
			})	
		}

		return this.setState({
			searchOutput: output
		})	
	}

	selectedGif = (gif) => {
		this.setState({
			selectedGif: gif
		})
	}

	render(){
		return(
			<>
				<div className="left-container">
					<SearchBar callBackFromSearch={this.retrieveSearchOutput}/>
					<div className='gif'><Gif displaySelected={this.state.selectedGif}/></div>
				</div>
				<div className="right-container">
					<GifList gifs={ this.state.searchOutput } selectedGif={ this.selectedGif }/>
				</div>
			</>
		)
	}
}

export default App;
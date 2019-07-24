import React, { Component } from 'react';
import ReactDom from 'react-dom';
import SearchBar from '.././search-bar/search-bar.jsx';
import Gif from '.././gif/gif.jsx';
import GifList from '.././gif-list/gif-list.jsx';

import './app.scss';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			searchOutput: null,
			selectedGifId: null
		}
	}

	retrieveSearchOutput = (output) => {
		this.setState({
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
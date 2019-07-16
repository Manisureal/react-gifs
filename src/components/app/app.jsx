import React, { Component } from 'react';
import ReactDom from 'react-dom';
import SearchBar from '.././search-bar/search-bar.jsx';
import Gif from '.././gif/gif.jsx';

import './app.scss';

class App extends Component {
	render(){
		return(
			<>
				<div className="left-container">
					<SearchBar />
					<div className='gif'><Gif /></div>
				</div>
				<div className="right-container">
				</div>
			</>
		)
	}
}

export default App;
import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './search-bar.scss';

class SearchBar extends Component {
	render(){
		return(
			<div>
				<input type="search" placeholder="Start Typing..."/>
			</div>
		)
	}
}

export default SearchBar;
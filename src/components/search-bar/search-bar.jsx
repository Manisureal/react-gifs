import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './search-bar.scss';

class SearchBar extends Component {
	constructor(props){
		super(props)
		this.inputItem = React.createRef();
	}

	componentDidMount() {
		this.inputItem.current.focus();
	}

	render(){
		return(
			<div className="search-bar">
				<span className="glyphicon glyphicon-search" />
				<input type="search" placeholder="Search..." ref={this.inputItem} />
			</div>
		)
	}
}

export default SearchBar;
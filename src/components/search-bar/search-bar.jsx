import React, { Component } from 'react';
import ReactDom from 'react-dom';
import GifList from '.././gif-list/gif-list.jsx';

import './search-bar.scss';

class SearchBar extends Component {
	constructor(props){
		super(props)
		this.inputItem = React.createRef();
	}

	componentDidMount() {
		this.inputItem.current.focus();
	}

	handleChange = (e) => {
		let url = `http://api.giphy.com/v1/gifs/search?q=${e.currentTarget.value}&apikey=qs27phkwUkdHszMG8TZdofXTSlL6eLO2`
		fetch(url)
		  .then(response => response.json())
		  .then((data) => {
		  	this.props.callBackFromSearch(data.data)
		});
	}

	render(){
		return(
			<div className="search-bar">
				<span className="glyphicon glyphicon-search" />
				<input type="text" placeholder="Search..." ref={this.inputItem} onChange={this.handleChange}/>
			</div>
		)
	}
}

export default SearchBar;
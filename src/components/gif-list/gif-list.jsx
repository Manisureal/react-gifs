import React, { Component } from 'react';
import ReactDom from 'react-dom';

import "./gif-list.scss";

class GifList extends Component {
	
	displayGifs() {
		let url;
		if (this.props.gifs != null ){
			this.props.gifs.forEach( (gif) => {
				url = `https://media.giphy.com/media/${gif.id}/giphy.gif`;
				console.log(gif.id);
				<img src={url} />;
			})
		}
		return null
	}

	render(){
		console.log(this.props.gifs)
		// let url = `https://media.giphy.com/media/3o6fJ8bYYnCW95ST0A/giphy.gif`

		// let url = `api.giphy.com/v1/gifs/${this.props.gifs[0].id}` ? this.props.gifs : null
		return(
			<div>
				{ this.displayGifs() }
			</div>
		)
	}

}

export default GifList;
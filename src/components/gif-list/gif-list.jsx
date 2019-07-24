import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Gif from '.././gif/gif.jsx';

import "./gif-list.scss";

class GifList extends Component {
	retrieveSelectedGif = (gif) => {
		this.props.selectedGif(gif)
	}

	displayGifs() {
		if (this.props.gifs != null ){
			return this.props.gifs.map( (gif) => {
				return <Gif gif={gif.id} key={gif.id} callBackFromGif={this.retrieveSelectedGif}/>
			})
		}
		return null
	}

	render(){
		return(
			<div className="gif-list">
				{ this.displayGifs() }
			</div>
		)
	}

}

export default GifList;
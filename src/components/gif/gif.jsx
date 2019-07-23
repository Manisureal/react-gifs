import React, { Component } from 'react';
import ReactDom from 'react-dom';

import "./gif.scss";

class Gif extends Component {
	render(){
		let url = `https://media.giphy.com/media/${this.props.gif}/giphy.gif`;
		let img = <img src={url} />

		return img
			// <>
				 
			// </>
		
	}

}

export default Gif;
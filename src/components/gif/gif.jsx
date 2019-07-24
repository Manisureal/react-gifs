import React, { Component } from 'react';
import ReactDom from 'react-dom';

import "./gif.scss";

class Gif extends Component {
	handleClick = (e) => {
		this.props.callBackFromGif(e.currentTarget.src)
	}

	render(){
		let url = `https://media.giphy.com/media/${this.props.gif}/giphy.gif`;
		let img = <img src={url} onClick={this.handleClick}/>;

		if (this.props.gif != undefined){
			return img;
		}

		if (this.props.displaySelected != null){
			return <img src={this.props.displaySelected} />;
		}

		return null;
	}

}

export default Gif;
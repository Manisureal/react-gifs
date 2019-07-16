import React, { Component } from 'react';
import ReactDom from 'react-dom';

import "./gif.scss";

class Gif extends Component {
	render(){
		return(
			<img src="https://images.unsplash.com/photo-1563141985-414bd4bd5c82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" height="500px" width="750px"/>
		)
	}

}

export default Gif;
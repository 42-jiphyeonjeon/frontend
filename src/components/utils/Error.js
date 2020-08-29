import React, { Component } from 'react';
import '../checkout/Checkout.css';
import {Link} from 'react-router-dom';

class Error extends Component{
	render() {
		return(
			<div class="checkout-container">
				<div class="checkout-undefined">
					<h1>{this.props.location.state.response}</h1>
					<h3>ERROR!</h3>
					<Link to="/">
						<input type="button" class="btn" value="돌아가기"/>
					</Link>
				</div>
			</div>
		);
	}
}

export default Error;
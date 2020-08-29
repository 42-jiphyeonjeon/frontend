import React, { Component } from 'react';
import './ItemInfo.css';
import Button from '../utils/Button.js'
import {IsCheckout} from '../utils/IsCheckout.js'
import axios from 'axios';

class ItemInfo extends Component{

	constructor(props)
	{
		super(props);
		this.state = {
			data: null
		}
	}

	async getBookInfo(){
		let response;
		if (!this.props.checkout) // 대출
		{
			response = await axios.get(
				'http://localhost:3000/book/' + this.props.id
			);
		}
		else // 반납
		{
			response = await axios.get(
				'http://localhost:3000/checkout/' + this.props.checkout.id
			);
		}
		console.log("Searh Item", response);
		return (response);
	}

	componentDidMount() {
		this.getBookInfo().then(
			info => this.setState(
				{
					data:	info.data.data
				}
			)
		)
	}

	render () {
		return (
			<div class="item">
				<img src={this.props.imgUrl} alt="책1"/>
				<div class="item-info">
					<h2>{this.props.bookTitle}</h2>
					<h3>{this.props.bookAuthor}</h3>
					<IsCheckout checkout = {this.props.checkout} active = {this.props.active}/>
					<Button id = {this.props.id} checkout = {this.props.checkout} active = {this.props.active} data = {this.state.data}/>
				</div>
			</div>
		);
	}
}

export default ItemInfo;

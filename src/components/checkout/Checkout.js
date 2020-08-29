import React, { Component, Fragment } from 'react';
import './Checkout.css';
import { CheckoutDate } from '../utils/Date';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Checkout extends Component{

	constructor(props)
	{
		super(props);
		this.state = {
			response: undefined,
			userName: '',
			checkoutStatus: this.props.location.state
		}
	}

	async postCheckoutInfo(){
		const request = await axios.post('http://localhost:3000/checkout/' + this.props.location.state.data.id, 
		{
			"userName" : this.state.userName,
			"checkoutStatus" : this.state.checkoutStatus
		}).then(function (response) {
			console.log(response.status);
			return(response.status);
		}).catch(function (error) {
			console.log(error.response.status);
			return(error.response.status);
		});
		return(request);
	}

	handleFormSubmit = async (formSubmitEvent) => {
		formSubmitEvent.preventDefault();
		const response = await this.postCheckoutInfo();
		this.setState({
			response: response
		});
		console.log(response);
	};

	handleNameChange = (changeEvent) => {
		changeEvent.preventDefault();
		this.setState({
			userName: changeEvent.target.value
		});
	};

	handleStatusChange = (changeEvent) => {
		changeEvent.preventDefault();
		this.setState({
			checkoutStatus: changeEvent.target.value
		});
	};

	render() {
		let CheckoutInfo = this.props.location.state;
		//임시방편입니다.. 3시간동안 react-hook invalid error 못고쳐서 그냥 올렸습니다. useHistory를 사용할라 하는데 안됐네요.
		if (CheckoutInfo !== undefined && this.state.response === undefined) 
		{
			CheckoutInfo = CheckoutInfo.data;
			return (
				<Fragment>
					<article>
						<div class="book_title">
							<h2>[{CheckoutInfo.title}] 대출하기</h2>
						</div>
						<div class="checkout-container">
							<div class="checkout_info">
								<h3>대출자</h3>
								<input type="text" class="info_name" placeholder="대출자 이름" onChange={this.handleNameChange}/>
							</div>
							<div class="checkout_info">
								<h3>대출 일시</h3>
								<CheckoutDate />
							</div>
							<div class="checkout_info">
								<h3>책 상태</h3>
								<input type="text" class="info_state" placeholder={CheckoutInfo.status} onChange={this.handleStatusChange}/>
							</div>
						</div>
						<div class="checkout_button">
							<form onSubmit={this.handleFormSubmit}>
								<input type="submit" class="btn" value="대출하기"/>
							</form>
						</div>
					</article>

				</Fragment>
			);
		}
		else{
			if (this.state.response === 200)
				return(<Redirect push to="/"/>);
			else
				return(<Redirect push to={{
					pathname: "/error",
					state: {response: this.state.response}}}/>);
		}
	}
}

export default Checkout;
import React, { Component, Fragment } from 'react';
import './Checkin.css';
import { CheckinDate } from '../utils/Date.js';
import { IsOverdue } from '../utils/IsCheckout';
import { Redirect} from 'react-router-dom';
import axios from 'axios';

class Checkin extends Component{

	constructor(props)
	{
		super(props);
		this.state = {
			response: undefined,
			selectedOption: "option1",
			checkinStatus: this.props.location.state
		}
	}

	async postCheckinInfo(){
		let isActive = (this.state.selectedOption === "option1") ? true : false;
		const request = await axios.post('http://localhost:3000/checkin/' + this.props.location.state.data.id, 
		{
			"active" : isActive,
			"checkinStatus" : this.state.checkinStatus.data.checkoutStatus
		}).then(function (response) {
			return (response.status);
		}).catch(function (error) {
			return (error.response.status);
		});
		return(request);
	}
	
	handleFormSubmit = async (formSubmitEvent) => {
		formSubmitEvent.preventDefault();
		const response = await this.postCheckinInfo();
		this.setState({
			response: response
		})
		console.log("You have submitted:", response);
	};

	handleOptionChange = (changeEvent) => {
		this.setState({
			selectedOption: changeEvent.target.value
		});
	};

	render() {
		let CheckinInfo = this.props.location.state; //이거도 고쳐야 합니다..하..
		console.log("CHECKIN", CheckinInfo);
		if (CheckinInfo !== undefined && this.state.response === undefined)
		{
			CheckinInfo = CheckinInfo.data;
			return (
				<Fragment>
					<article>
						<div class="book_title">
							<h2>[{CheckinInfo.book.title}] 반납하기</h2>
						</div>
						<div class="checkin-container">
							<div class="checkin_info">
								<h3>반납자</h3>
								<input type="text" class="info_name" placeholder={CheckinInfo.user.userName}disabled/>
							</div>
							<div class="checkin_info">
								<div class="info_date">
									<h3>반납 일시</h3>
									<IsOverdue overdueDay = {CheckinInfo.overdueDay}/>
								</div>
								<CheckinDate />
							</div>
							<div class="checkin_info">
								<h3>책 상태</h3>
								<input type="text" class="info_state" placeholder={CheckinInfo.checkoutStatus} />
							</div>
							<div class="checkin_info">
								<h3>대출 가능 유무</h3>
								<ul class="checkin_radio">
									<li><input type="radio" value="option1" checked={this.state.selectedOption === "option1"} onChange={this.handleOptionChange}/>가능</li>
									<li><input type="radio" value="option2" checked={this.state.selectedOption === "option2"} onChange={this.handleOptionChange}/>불가능</li>
								</ul>
							</div>
						</div>
						<div class="checkin_button">
							<form onSubmit={this.handleFormSubmit}>
								{/* <Link to="/"> */}
									<input type="submit" class="btn" value="반납하기"/>
								{/* </Link> */}
							</form>
						</div>
					</article>
				</Fragment>
			);
		}
		else
		{
			if (this.state.response === 200)
				return(<Redirect push to="/"/>);
			else
				return(<Redirect push to={{
					pathname: "/error",
					state: {response: this.state.response}}}/>);
		}
	}
}

export default Checkin;
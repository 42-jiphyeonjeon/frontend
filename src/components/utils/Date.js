import React, { Component } from 'react';

export class CheckinDate extends Component {
	render() {
		let checkinDate = new Date();
		let dataString = checkinDate.toLocaleDateString();
		return (
			<input type="text" class="info_date_text" placeholder={dataString} disabled/>
		);
	}
}

export class CheckoutDate extends Component{
	render() {
		let currentDate = new Date();
		let futureDate = new Date();
		futureDate.setDate(currentDate.getDate() + 14);

		let dateString = currentDate.toLocaleDateString();
		dateString += ' ~ ';
		dateString += futureDate.toLocaleDateString();
		// let dateString = currentDate.toISOString().slice(0,10).replace(/-/g,"/");
		// dateString += '~';
		// dateString += futureDate.toISOString().slice(0,10).replace(/-/g,"/");
		console.log(dateString);
		return (
			<input type="text" class="info_date" placeholder={dateString} disabled/>
		);
	}
}

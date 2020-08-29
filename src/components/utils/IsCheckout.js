import React, {Component, Fragment} from 'react';

export class IsOverdue extends Component{
	render (){
		const overdueDay = this.props.overdueDay;
		if (overdueDay > 0)
		{
			return (<h2>(+{overdueDay}일 연체됨)</h2>);
		}
		else
		{
			return (null);
		}
	}
}

export class IsCheckout extends Component{
	render (){
		const active = this.props.active;
		const checkout = this.props.checkout;
		if (active && checkout)
		{
			if (checkout.overdueDay <= 0)
			{
				return (
					<h4>대출자 : {checkout.user.userName}</h4>
				);
			}
			else
			{
				return (
					<Fragment>
						<h4>대출자 : {this.props.checkout.user.userName}</h4>
						<h5>(+{this.props.checkout.overdueDay}일 연체)</h5>
					</Fragment>
				);
			}
		}
		else
		{
			return (null);
		}
	}
}

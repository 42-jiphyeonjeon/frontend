import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Search from './components/search/Search';
import Overdue from './components/overdue/Overdue';
import Checkin from './components/checkin/Checkin';
import Checkout from './components/checkout/Checkout';
import Error from './components/utils/Error';
import axios from 'axios';

class App extends Component{
	render() {
		axios.get(`/book/search?query=해커`)
			.then(res =>{
				console.log(res);
				console.log(res.data);
			})
		return(
			<Router>
				<Navigation />
				<Switch>
					{/* 특정 경로 외에는 네비게이션을 보이게 하면 안되는데, 어떻게 설정할 방법이 없나..? 
					매번 코드에 넣는건 같은코드 반복이라 너무 비효율적인데. */}
					<Route exact path="/" component={Search} />
					<Route path="/search" component={Search} />
					<Route path="/overdue" component={Overdue} />
					<Route path="/checkout/:bookTigerId" component={Checkout} />
					<Route path="/checkin/:checkoutId" component={Checkin} />
					<Route path="/error" component={Error} />
					<Redirect path="*" to="/" />
				</Switch>
			</Router>
		);
	}
}

export default App;
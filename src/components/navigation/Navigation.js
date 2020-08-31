import React, { Component } from 'react';
import './Navigation.css';
import {Link} from 'react-router-dom';

class Navigation extends Component{
	render() {
		return(
			<header>
				<div className="navigation-bar">
					<div className="navigation-logo">
						<img src={require('../../img/header_logo.png')} alt="집현전 로고"/>
						<h2>집현전</h2>
					</div>
					<div className="navigation-menu">
						<ul>
							<li><Link to="/search">조회</Link></li>
							<li><Link to="/overdue">연체</Link></li>
						</ul>
					</div>
				</div>
			</header>
		);
	}
}

export default Navigation;

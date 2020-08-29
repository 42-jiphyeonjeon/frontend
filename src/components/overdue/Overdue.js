import React, { Component, Fragment} from 'react';
import SearchResultNum from '../search/SearchResultNum';
import SearchResultNone from '../search/SearchResultNone';
import axios from 'axios';
import SearchResultItem from '../search/SearchResultItem';

class Overdue extends Component{

	constructor(props)
	{
		super(props);
		this.state = {
			data: null,
			count: 0
		}
	}

	async getOverdueResult(){
		const response = await axios.get(
			'http://localhost:3000/book/overdue'
		);
		return (response);
	}

	componentDidMount() {
		this.getOverdueResult().then(
			info => this.setState(
				{
					data:	info.data.data,
					count:	info.data.count
				}
			)
		)
	}

	render() {
		const blankSpaceStyle={
			position: "relative",
			width: "70%",
			textAlign: "left",
			margin: "0 auto",
			marginTop: "170px"
		}

		return (
			<Fragment>
				<div style={blankSpaceStyle}></div>
				<SearchResultNum count = {this.state.count}/>
				{(this.state.count)
					? <SearchResultItem data = {this.state.data}/>
					: <SearchResultNone />}
			</Fragment>
		);
	}
}

export default Overdue;
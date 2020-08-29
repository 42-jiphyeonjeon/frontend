import React, { Component, Fragment } from 'react';
import './Search.css';
import SearchResultItem from './SearchResultItem';
import SearchResultNone from './SearchResultNone';
import SearchResultNum from './SearchResultNum';
import axios from 'axios';

class Search extends Component{

	constructor (props)
	{
		super(props);
		this.state = {
			data: null,
			count: 0,
			text: '',
		}
	}

	async getSearchResult(){
		const response = await axios.get(
			'http://localhost:3000/book/search?query=' + this.state.text
		);
		return (response);
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.getSearchResult().then(
			temp => this.setState(
				{
					data:	temp.data.data,
					count:	temp.data.count
				}
			)
		)
	}

	handleSearchTextChange = (e) => {
		this.setState({
			text: e.target.value
		})
	}

	render() {
		return(
			<Fragment>
				<div class="search-container">
					<form onSubmit={this.handleSubmit}>
						<input type="text" placeholder="도서명, 저자를 입력하세요." onChange={this.handleSearchTextChange}/>
						<input type="submit" id="btn" class="test" value="검색" />
					</form>
				</div>
				<SearchResultNum count = {this.state.count}/>
				{(this.state.count)
					? <SearchResultItem data = {this.state.data}/>
					: <SearchResultNone />}
			</Fragment>
		);
	}
}

export default Search;
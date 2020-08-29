import React, { Component, Fragment } from 'react';
import './SearchResultNum.css';

class SearchResultNum extends Component{
	render (){
		let resultNum = this.props.count;
		return (
			<Fragment>
				<div class="search-result">
					<h1>검색결과</h1>
					<h3>총 {resultNum}개의 결과가 검색되었습니다.</h3>
				</div>
			</Fragment>
		);
	}
}

export default SearchResultNum;

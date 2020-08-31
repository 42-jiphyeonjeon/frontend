import React, { Component } from 'react';
import './SearchResultNone.css';

class SearchResultNone extends Component{
	render (){
		return (
			<div className="item-none">
				<h1>검색결과가 없어요.ㅜㅜ</h1>
				<h3>다른 검색어를 사용해서 검색해보세요.</h3>
			</div>
		);
	}
}

export default SearchResultNone;

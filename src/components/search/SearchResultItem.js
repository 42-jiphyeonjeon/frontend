import React, { Component, Fragment } from 'react';
import './SearchResultItem.css';
import Iteminfo from './ItemInfo';
import DummyImage from '../../img/book_1.jpg'

class SearchResultItem extends Component{

	render (){
		const bookInfo = this.props.data;
		const list = bookInfo.map(
		info => (<Iteminfo	imgUrl={DummyImage} 
							id={info.id}
							bookTitle={info.title} 
							bookAuthor={info.author}
							active={info.active}
							checkout={info.checkout}/>));
		return (
			<Fragment>
				<div class="item-container">
					{list}
				</div>
			</Fragment>
		);
	}
}

export default SearchResultItem;
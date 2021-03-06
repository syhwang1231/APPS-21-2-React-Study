// purpose: 검색창에 단어를 입력하면 오른편에 비디오 리스트 업데이트 가능

import React,{ Component } from 'react';

class SearchBar extends Component{
	constructor(props){
		super(props);
		
		this.state = { term: '' };
	}
	
	render() {
		return (
			<div className="search-bar">
				<input
				value={this.state.term}
				onChange = {event => this.onInputChange(event.target.value)} />
			</div>
		)
	}
	
	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;  // 이 어플리케이션의 어떤 곳에서도 SearchBar 컴포넌트를 불러올 수 있다

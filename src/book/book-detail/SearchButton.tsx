import React from 'react'
import booksitoutIcon from '../../common/icons/booksitoutIcon'
import styled from 'styled-components';

const SearchButton = ({ book }) => {
	return (
		<Button href={`/search/${book?.title ?? ''}`}>
			<booksitoutIcon.search className="h2" />
		</Button>
	)
}

const Button = styled.a.attrs({ className: 'text-book' })`
	position: absolute;
	right: 10px;

	width: 50px;
	height: 50px;
`


export default SearchButton
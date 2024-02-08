import defaultBookCover from '../../../images/placeholder/default-book-cover.png'
import styled from 'styled-components';

const BookCover = ({ book }) => {
	return (
		<Image src={book.cover === '' || book.cover == null ? defaultBookCover : book.cover} alt="" />
	)
}

const Image = styled.img.attrs({
	className: 'img-fluid rounded border'
})`
	height: 200px;
`;

export default BookCover
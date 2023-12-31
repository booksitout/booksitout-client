import React from 'react'
import defaultBookCover from '../../../images/placeholder/default-book-cover.png'

const BookCover = ({ book }) => {
	return (
		<div className="row justify-content-center">
			<div className="col-6 col-md-12">
				<img
					src={book.cover === '' || book.cover == null ? defaultBookCover : book.cover}
					alt=""
					className={`img-fluid rounded  w-100 ${book.cover !== '' && 'border'}`}
				/>
			</div>
		</div>
	)
}

export default BookCover
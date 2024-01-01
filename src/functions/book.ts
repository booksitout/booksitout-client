import urls from '../components/settings/urls'
import { booksitoutServer } from '../config/axios'

const getBookList = (range, page, size = 10) => {
	return booksitoutServer
		.get(urls.api.book.get.all(range, page, size))
		.then((res) => res.data)
		.catch(() => { return null })
}

const getBook = (bookId) => {
	return booksitoutServer
		.get(urls.api.book.get.detail(bookId))
		.then((res) => res.data)
		.catch(() => { return null })
}

const getLastBook = () => {
	return booksitoutServer
		.get(urls.api.book.get.last)
		.then((res) => res)
}

const addBook = (book) => {
	return booksitoutServer
		.post(urls.api.book.add, book)
		.then((res) => res.status.toString().startsWith('2'))
		.catch(() => { return false })
}

const editBook = (editedBook) => {
	return booksitoutServer
		.put(urls.api.book.edit.all(editedBook.bookId), editedBook)
		.then((res) => res.status.toString().startsWith('2'))
		.catch(() => { return false })
}

const giveUpBook = (bookId) => {
	return booksitoutServer
		.put(urls.api.book.edit.giveup(bookId), null)
		.then((res) => res.status.toString().startsWith('2'))
		.catch(() => { return false })
}

const unGiveUpBook = (bookId) => {
	return booksitoutServer
		.put(urls.api.book.edit.unGiveup(bookId), null)
		.then((res) => res.status.toString().startsWith('2'))
		.catch(() => { return false })
}

const deleteBook = (bookId) => {
	return booksitoutServer
		.delete(urls.api.book.delete(bookId))
		.then((res) => res.status.toString().startsWith('2'))
		.catch(() => { return false })
}

const addRating = (bookId, rating) => {
	return booksitoutServer
		.put(urls.api.book.edit.all(bookId), { rating: rating })
		.then((res) => res.status.toString().startsWith('2'))
		.catch(() => { return false })
}

const addReview = (bookId, review) => {
	return booksitoutServer
		.put(urls.api.book.edit.all(bookId), { review: review })
		.then((res) => res.status.toString().startsWith('2'))
		.catch(() => { return false })
}

const addSummary = (bookId, summary) => {
	return booksitoutServer
		.put(urls.api.book.edit.all(bookId), { summary: summary })
		.then((res) => res.status.toString().startsWith('2'))
		.catch(() => { return false })
}

export { giveUpBook, getLastBook, getBookList, addBook, deleteBook, getBook, editBook, unGiveUpBook, addRating, addReview, addSummary }

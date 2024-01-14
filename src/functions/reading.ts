import toast from 'react-hot-toast'
import urls from '../components/settings/urls'
import messages from '../components/settings/messages'
import { booksitoutServer } from '../config/axios'

const getBookOfCurrentReadingSession = () => {
	return booksitoutServer
		.get(urls.api.reading.get.currentBook)
		.then((res) => {
			if (res.status === 404 || res.status === 204) throw new Error()
			return res.data
		})
		.catch((e) => {
			return null
		})
		.then((book) => book)
}

const getAllReadingSessionOfBook = (bookId) => {
	return booksitoutServer
		.get(urls.api.reading.get.all(bookId))
		.then((res) => res.data)
}

const startReadingSession = (bookId) => {
	return booksitoutServer
		.post(urls.api.reading.add.start(bookId), null)
		.then((res) => [res.data != null, res.data])
}

const endReadingSessionWithoutSaving = () => {
	return booksitoutServer
		.delete(urls.api.reading.delete.notSaving)
		.then((res) => res.status.toString().startsWith('2'))
}

const endReadingSession = (book, endPage: number) => {
	const readingTime = Math.round(Number(localStorage.getItem('reading-session-time')) ?? 1)

	return booksitoutServer
		.put(urls.api.reading.edit.end(book.id, endPage, readingTime), null)
		.then((res) => {
			if (res.status === 200) {
				return res.data
			} else {
				throw new Error(res.data)
			}
		})
		.then(() => {
			localStorage.removeItem('reading-session-time')
			toast.success(
				Number(book.endPage) === Number(endPage) ? '책을 다 읽으셨어요! 별점, 감상, 요약을 추가해 보세요!' : messages.reading.add.success
			)
			return true
		})
		.catch((data) => {
			toast.error(data.message)
			return false
		})
}

const addReadingSession = (bookId, readingSession) => {
	return booksitoutServer
		.post(urls.api.reading.add.all(bookId), readingSession)
		.then((res) => res.status)
		.then((status) => status.toString().startsWith('2'))
}

const editReadingSession = (readingSessionId, editedReadingSession) => {
	return booksitoutServer
		.put(urls.api.reading.edit.id(readingSessionId), editedReadingSession)
		.then((res) => res.status.toString().startsWith('2'))
}

const deleteReadingSession = (readingSessionId) => {
	return booksitoutServer
		.delete(urls.api.reading.delete.all(readingSessionId))
		.then((res) => res.status.toString().startsWith('2'))
}

export {
	startReadingSession,
	endReadingSession,
	endReadingSessionWithoutSaving,
	getAllReadingSessionOfBook,
	addReadingSession,
	deleteReadingSession,
	editReadingSession,
	getBookOfCurrentReadingSession,
}

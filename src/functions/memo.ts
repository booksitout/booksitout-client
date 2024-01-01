import urls from '../components/settings/urls'
import { booksitoutServer } from '../config/axios'

const getMemoListOfBook = (bookId) => {
	return booksitoutServer
		.get(urls.api.memo.get.all(bookId))
		.then((res) => res.data)
}

const addMemo = (memo, bookId) => {
	return booksitoutServer
		.post(urls.api.memo.add(bookId), memo)
		.then((res) => {
			return res.status
		})
		.catch((e) => {
			return false
		})
		.then((status) => {
			return status.toString().startsWith('2')
		})
}

const editMemo = (editedMemo) => {
	return booksitoutServer
		.put(urls.api.memo.edit(editedMemo.memoId), editMemo)
		.then((res) => res.status.toString().startsWith('2'))
}

const deleteMemo = (memoId) => {
	return booksitoutServer
		.delete(urls.api.memo.delete(memoId))
		.then((res) => res.status.toString().startsWith('2'))
}

export { getMemoListOfBook, addMemo, editMemo, deleteMemo }

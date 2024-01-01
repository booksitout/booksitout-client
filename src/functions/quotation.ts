import urls from '../components/settings/urls'
import { booksitoutServer } from '../config/axios'
import utils from './utils'

const getQuotationListOfBook = (bookId) => {
	return booksitoutServer
		.get(urls.api.quotation.get.all(bookId))
		.then((res) => res.data)
}

const addQuotation = (bookId, quotation) => {
	return booksitoutServer
		.post(urls.api.quotation.add(bookId), quotation)
		.then((res) => res.status.toString().startsWith('2'))
}

const editQuotation = (editedQuotation) => {
	return booksitoutServer
		.put(urls.api.quotation.edit(editedQuotation.quotationId), editQuotation)
		.then((res) => res.status.toString().startsWith('2'))
}

const deleteQuotation = (quotationId) => {
	return booksitoutServer
		.delete(urls.api.quotation.delete(quotationId))
		.then((res) => res.status.toString().startsWith('2'))
}

export { getQuotationListOfBook, addQuotation, editQuotation, deleteQuotation }

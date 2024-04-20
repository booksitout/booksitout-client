import aladin from '../images/search/aladin.png'
import yes24 from '../images/search/yes24.png'
import kyobo from '../images/search/kyobo.jpg'
import booksitout from '../images/logo.png'

import bookCover from '../images/placeholder/default-book-cover-loading.png'

class ImageConfig {
	static Logo = class {
		static ALADIN = aladin
		static YES24 = yes24
		static KYOBO = kyobo
		static BOOKSITOUT = booksitout
	}

	static Placeholder = class {
		static BookCover = bookCover
	}
}

export default ImageConfig

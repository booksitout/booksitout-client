import React from 'react'
import BookSearchResult from '../BookSearchResult'
import LibraryLabel from '../label/LibraryLabel'
import LibraryComponent from '../cardComponent/LibraryCardComponent'
import { LibraryBook } from '../../../types/BookType'
import LibrarySearchLoading from '../placeholder/LibrarySearchLoading'
import { booksitoutServer } from '../../../config/axios'
import BookSearchResultLoading from '../BookSearchResultLoading'
import location from '../../library/locationFunction'

const LibrarySearchResult = ({query}) => {
	const [loading, setLoading] = React.useState<boolean>(true)

	const [locationName, setLocationName]  = React.useState<string | null>(null)
	const [latitude, setLatitude] = React.useState<number | null | undefined>(null)
	const [longitude, setLongitude] = React.useState<number | null | undefined>(null)
	React.useEffect(() => {
		getLocation()
	}, [])

	const getLocation = async () => {
		const locationResult = await location.getLatitudeAndLongitude()

		if (locationResult == null || locationResult === undefined || locationResult[0] === null || locationResult[1] === null) {
			setLatitude(undefined)
			setLongitude(undefined)
		} else {
			console.log('location success!')
			setLatitude(locationResult[0])
			setLongitude(locationResult[1])
		}
	}

	const [libraryList, setLibraryBookList] = React.useState<LibraryBook[]>([])
    React.useEffect(() => {
		setLoading(true)

		if (latitude !== null && latitude !== undefined && longitude !== null && longitude !== undefined) {
			booksitoutServer
				.get(`/v3/search/library/offline/by-region?query=${query}&lat=${latitude}&long=${longitude}`)
				.then(res => {
					setLibraryBookList(res.data.library)
					setLocationName(res.data.displayLocation)
				})
				.catch(() => setLibraryBookList([]))
				.finally(() => setLoading(false))
		}
    }, [query, latitude, longitude])

	if (loading) {
		return <BookSearchResultLoading label='도서관' labelComponent={<LibraryLabel locationName={locationName} />} CardComponent={LibrarySearchLoading} />
	}

    return (
		<BookSearchResult
			label='도서관'
			labelComponent={<LibraryLabel locationName={locationName} />}
			bookList={libraryList}
			CardComponent={LibraryComponent}
			isConfigured={true}
			notConfiguredUrl='/settings/search/library'
		/>
	)

}

export default LibrarySearchResult
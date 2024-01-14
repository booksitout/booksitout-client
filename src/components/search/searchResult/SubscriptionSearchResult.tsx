import React from 'react'
import search from '../../../functions/search'
import { SubscriptionBook } from '../../../types/BookType'
import BookSearchResult from '../BookSearchResult'
import SubscriptionLabel from '../label/SubscriptionLabel'
import SubscriptionComponent from '../cardComponent/SubscriptionCardComponent'
import SubscriptionSearchLoading from '../placeholder/SubscriptionSearchLoading'
import SearchResultInitialFetch from '../placeholder/SearchResultInitialFetch'
import BookSearchResultLoading from '../BookSearchResultLoading'
import { booksitoutServer } from '../../../config/axios'

const SubscriptionSearchResult = ({query}) => {
	const [loading, setLoading] = React.useState<boolean>(true)
	const [initialFetch, setInitialFetch] = React.useState<boolean>(true)

	const [subscriptionList, setSubscriptionBookList] = React.useState<SubscriptionBook[]>([])
    React.useEffect(() => {
		setLoading(true)

		setTimeout(() => {
			setInitialFetch(false)
		}, 300)

		booksitoutServer
					.get(`/v2/search/subscription?query=${query}&include=${search.local.settings.subscription.api()}`)
					.then((res) => setSubscriptionBookList(res.data))
					.catch(() => null)
					.finally(() => {
						setLoading(false)
						setInitialFetch(false)
					})
    }, [query])

	if (initialFetch) {
		return (
			<BookSearchResult
				label='구독'
				labelComponent={<SubscriptionLabel />}
				bookList={[1, 2]}
				CardComponent={SearchResultInitialFetch}
				isConfigured={true}
			/>
		)
	}

	if (loading) {
		return <BookSearchResultLoading label='구독' labelComponent={<SubscriptionLabel />} CardComponent={SubscriptionSearchLoading} />
	}

    return (
		<BookSearchResult
			label='구독'
			labelComponent={<SubscriptionLabel />}
			bookList={subscriptionList}
			CardComponent={SubscriptionComponent}
			isConfigured={true}
		/>
	)
}

export default SubscriptionSearchResult
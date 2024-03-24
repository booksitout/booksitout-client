import { useState, useEffect } from 'react'

const useSearchQuery = (defaultValue = '') => {
	const [query, setQuery] = useState<string>(defaultValue)
	const [debouncedQuery, setDebouncedQuery] = useState<string>(query)

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedQuery(query)
		}, 500)

		return () => {
			clearTimeout(handler)
		}
	}, [query])

	return [query, setQuery, debouncedQuery]
}

export default useSearchQuery

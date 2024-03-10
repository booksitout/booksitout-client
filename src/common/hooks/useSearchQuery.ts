import { useEffect, useState } from "react";

const useSearchQuery = (delay = 250) => {
	const [query, setQuery] = useState<string>('')
	const [debouncedQuery, setDebouncedQuery] = useState(query)

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedQuery(query)
		}, delay)

		return () => {
			clearTimeout(handler)
		}
	}, [query, delay])

	return [query, setQuery, debouncedQuery]
};

export default useSearchQuery;
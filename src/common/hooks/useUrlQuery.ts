import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useUrlQuery = (query: string): string | null => {
	const location = useLocation();
	const [value, setValue] = useState<string | null>(null)

	useEffect(() => {
		const queryParams = new URLSearchParams(location.search);
		setValue(queryParams.get(query.trim()) ?? null)
	}, [location.search, query]);

	return value
};

export default useUrlQuery;
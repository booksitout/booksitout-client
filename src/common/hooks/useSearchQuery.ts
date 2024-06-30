import {useState, useEffect} from 'react'

const useSearchQuery = (defaultValue = '') => {
    const [query, setQuery] = useState<string>(defaultValue)
    const [dQuery, setDQuery] = useState<string>(query)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDQuery(query)
        }, 250)

        return () => {
            clearTimeout(handler)
        }
    }, [query])

    return {query, setQuery, dQuery}
}

export default useSearchQuery

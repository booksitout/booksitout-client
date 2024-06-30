import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import useSearchQuery from '../../../common/hooks/useSearchQuery';
import {useNavigate} from 'react-router-dom';
import useUrlQuery from '../../../common/hooks/useUrlQuery';
import {BooksitoutServer} from '../../../config/BooksitoutServer';
import toast from 'react-hot-toast';
import AutoCompleteResponse from '../../../common/response/AutoCompleteResponse';
import SearchHistoryResponse from '../../../common/response/SearchHistoryResponse';
import ApiUrls from '../../../ApiUrls';
import useLoginStore from '../../login/useLoginStore';
import searchCache from './searchCache';
import SearchBar from './SearchBar';

interface Props {
    autoCompleteApiUrl: string | null
    searchHistoryApiUrl: string | null
    searchResultUrl: string
    searchHistoryCacheKey: string | null
    placeholder: string
}

const SearchBarWithHistoryAndSuggestion: React.FC<Props> = ({
                                                                autoCompleteApiUrl,
                                                                searchHistoryApiUrl,
                                                                searchResultUrl,
                                                                searchHistoryCacheKey,
                                                                placeholder
                                                            }) => {
    const navigate = useNavigate()
    const isLoggedIn = useLoginStore((state) => state.isLoggedIn())

    const defaultQuery = useUrlQuery('q') ?? ''
    const {query, setQuery, dQuery} = useSearchQuery(defaultQuery);
    const [querySuggestions, setQuerySuggestions] = useState<AutoCompleteResponse[]>([])
    const [queryHistories, setQueryHistories] = useState<SearchHistoryResponse[]>([])
    const [isShowingQueryHistory, setIsShowingQueryHistory] = useState<boolean>(false)

    useEffect(() => {
        if (dQuery !== '' && autoCompleteApiUrl != null) {
            BooksitoutServer
                .get(`${autoCompleteApiUrl}?q=${dQuery}`)
                .then((res) => setQuerySuggestions(res.data))
        }
    }, [autoCompleteApiUrl, dQuery])

    useEffect(() => {
        if (searchHistoryApiUrl != null && searchHistoryCacheKey != null && dQuery === '') {
            if (isLoggedIn) {
                BooksitoutServer
                    .get(ApiUrls.Search.BookHistory.GET)
                    .then((res) => {
                        setQueryHistories(res.data)
                        localStorage.setItem(searchHistoryCacheKey, JSON.stringify(res.data))
                    })
            } else {
                const storedHistories = localStorage.getItem(searchHistoryCacheKey);
                if (storedHistories) {
                    setQueryHistories(JSON.parse(storedHistories))
                }
            }
        }
    }, [searchHistoryApiUrl, dQuery, isLoggedIn, searchHistoryCacheKey])

    useEffect(() => {
        (setQuery as Dispatch<SetStateAction<string>>)(defaultQuery)
    }, [defaultQuery, setQuery])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (query.length <= 2) {
            toast.error('검색어는 2글자 이상이어야 해요')
            return
        }

        searchCache.updateCache(
            searchHistoryCacheKey,
            dQuery.toString(),
            `${searchResultUrl}?q=${query}`
        )

        navigate(`${searchResultUrl}?q=${query}`)
    }

    return (
        <SearchBar
            placeholder={placeholder}

            query={query}
            isShowingQueryHistory={dQuery === '' && isShowingQueryHistory}
            isShowingAutoComplete={dQuery != null && dQuery !== defaultQuery}
            queryHistories={queryHistories}
            querySuggestions={querySuggestions}

            setIsShowingQueryHistory={(isShowing) => setIsShowingQueryHistory((isShowing))}
            setQuery={(q) => setQuery(q)}
            handleSubmit={handleSubmit}
        />
    )
}

export default SearchBarWithHistoryAndSuggestion
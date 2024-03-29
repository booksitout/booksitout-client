import styled from 'styled-components';
import booksitoutIcon from '../../../config/booksitoutIcon';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import useSearchQuery from '../../../common/hooks/useSearchQuery';
import { useNavigate } from 'react-router-dom';
import ColorConfig from '../../../config/ColorConfig';
import useUrlQuery from '../../../common/hooks/useUrlQuery';
import { booksitoutServer } from '../../../config/axios';
import breakpoints from '../../../config/breakpoints';
import toast from 'react-hot-toast';
import AutoCompleteResponse from '../../../common/response/AutoCompleteResponse';

interface Props {
    autoCompleteApiUrl: string
    searchResultUrl: string
    placeholder: string
}

const SearchBar: React.FC<Props> = ({ autoCompleteApiUrl, searchResultUrl, placeholder }) => {
    const navigate = useNavigate()

    const defaultQuery = useUrlQuery('q') ?? ''
    const [query, setQuery, dQuery] = useSearchQuery(defaultQuery);
    const [querySuggestions, setQuerySuggestions] = useState<AutoCompleteResponse[]>([])

    useEffect(() => {
        if (dQuery !== '') {
            booksitoutServer
                .get(`${autoCompleteApiUrl}?q=${dQuery}`)
                .then((res) => setQuerySuggestions(res.data))
        }
    }, [autoCompleteApiUrl, dQuery])

    useEffect(() => {
        (setQuery as Dispatch<SetStateAction<string>>)(defaultQuery)
    }, [defaultQuery, setQuery])

    const handleSubmit = (event) => {
        event.preventDefault()
        if (query.length <= 2) {
            toast.error('검색어는 2글자 이상이어야 합니다.')
            return
        }

        navigate(`${searchResultUrl}?q=${query}`)
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        (setQuery as Dispatch<SetStateAction<string>>)(event.target.value ?? '');
    };

    return (
        <SearchContainer onSubmit={handleSubmit}>
            <Input
                placeholder={placeholder}
                value={query}
                onChange={handleInputChange}
            />

            <SearchButton type="submit">
                <span><booksitoutIcon.search /></span>
            </SearchButton>

            {dQuery && dQuery !== defaultQuery &&
                <AutocompleteBox>
                    {querySuggestions.map((suggestion, index) =>
                        <Suggestion href={suggestion.url} key={index} >
                            <SuggestionImage src={suggestion.imageUrl} />
                            <SuggestionName>{suggestion.name}</SuggestionName>
                        </Suggestion>
                    )}
                </AutocompleteBox>
            }
        </SearchContainer>
    )
}


const SearchContainer = styled.form`
    display: flex;
    position: relative;
    align-items: center;
    border: 2px solid ${ColorConfig.Primary};
    border-radius: 10px;
    padding: 5px 10px;
`;

const Input = styled.input`
    flex-grow: 1;
    border: none;
    border-radius: 0px;
    outline: none;
    padding: 10px 20px;
    font-size: 16px;
    min-width: 280px;
    
    @media screen and (max-width: ${breakpoints.md}px){
        max-width: 350px;
    }
`;

const SearchButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
    padding-top: 5px;
    color: ${ColorConfig.Primary};
`;

const AutocompleteBox = styled.div`
    position: absolute;
    width: 100%;
    top: 120%;
    left: 0;
    background-color: #fff;
    border: 2px solid ${ColorConfig.Primary};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    z-index: 1000;
    min-width: 350px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Suggestion = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;

    padding: 10px;
    padding-left: 30px;
    &:hover {
        background-color: #f2f2f2;
    }
`;

const SuggestionImage = styled.img.attrs({
    className: 'img-fluid'
})`
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border-radius: 20px;
`;

const SuggestionName = styled.div`
    font-size: 16px;
    color: inherit;
    font-weight: bold;
    padding-left: 10px;
`;

export default SearchBar
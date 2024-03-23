import styled from 'styled-components';
import booksitoutIcon from '../../../config/booksitoutIcon';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import useSearchQuery from '../../../common/hooks/useSearchQuery';
import { useNavigate } from 'react-router-dom';
import ColorConfig from '../../../config/ColorConfig';
import useUrlQuery from '../../../common/hooks/useUrlQuery';
import { booksitoutServer } from '../../../config/axios';
import breakpoints from '../../../config/breakpoints';

interface Props {
    autoCompleteApiUrl: string
    searchResultUrl: string
    placeholder: string
}

const SearchBar: React.FC<Props> = ({ autoCompleteApiUrl, searchResultUrl, placeholder }) => {
    const navigate = useNavigate()

    const defaultQuery = useUrlQuery('q') ?? ''
    const [query, setQuery, dQuery] = useSearchQuery(defaultQuery);
    const [querySuggestions, setQuerySuggestions] = useState<string[]>([])

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
                        <Suggestion key={index} onClick={() => (setQuery as Dispatch<SetStateAction<string>>)(suggestion)}>{suggestion}</Suggestion>
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

const Suggestion = styled.div`
    padding: 10px;
    padding-left: 30px;
    &:hover {
        background-color: #f2f2f2;
    }
`;

export default SearchBar
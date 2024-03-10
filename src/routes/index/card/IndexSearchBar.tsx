import styled from 'styled-components';
import RouteContainer from '../../../common/styles/RouteContainer';
import booksitoutIcon from '../../../config/booksitoutIcon';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import useSearchQuery from '../../../common/hooks/useSearchQuery';
import { useNavigate } from 'react-router-dom';
import ColorConfig from '../../../config/ColorConfig';

const IndexSearchBar = () => {
    const navigate = useNavigate()

    const [query, setQuery, debouncedQuery] = useSearchQuery()
    const [autocompleteSuggestions, setAutocompleteSuggestions] = useState<string[]>([]);

    useEffect(() => {
        // booksitoutServer
        //     .get(`${ApiUrls.Search.AutoComplete.GET}?q=${debouncedQuery}`)

        setAutocompleteSuggestions(['suggestion1', 'suggestion2', 'suggestion3'])
    }, [debouncedQuery])

    const handleInputChange = (event) => {
        (setQuery as Dispatch<SetStateAction<string>>)(event.target.value ?? '');
    };

    const handleSubmit = (event) => {
        event.preventDefault()

        navigate(`/search?q=${query}`)
    }

    return (
        <RouteContainer>
            <Container>
                <SearchContainer onSubmit={handleSubmit}>
                    <Input 
                        placeholder="여러곳에서 1번에 책 검색하기"
                        value={query}
                        onChange={handleInputChange}
                    />

                    <SearchButton type="submit">
                        <span><booksitoutIcon.search /></span>
                    </SearchButton>
                    
                    {debouncedQuery &&        
                        <AutocompleteBox>
                            {autocompleteSuggestions.map((suggestion, index) => 
                                <Suggestion key={index} onClick={() => (setQuery as Dispatch<SetStateAction<string>>)(suggestion)}>{suggestion}</Suggestion>
                            )}
                        </AutocompleteBox>
                    }
                </SearchContainer>
            </Container>
        </RouteContainer>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SearchContainer = styled.form`
    border: 2px solid ${ColorConfig.Primary};
    border-radius: 10px;
    padding: 5px 10px;
`;

const Input = styled.input`
    flex-grow: 1;
    border: none;
    outline: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 0px;

    min-width: 350px;
`;

const SearchButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
    color: ${ColorConfig.Primary};
`;

const AutocompleteBox = styled.div`
    position: absolute;
    background-color: #fff;
    border: 1px solid ${ColorConfig.Primary};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    z-index: 1000;

    min-width: 350px;
`;

const Suggestion = styled.div`
    padding: 10px;
    &:hover {
        background-color: #f2f2f2;
    }
`;

export default IndexSearchBar
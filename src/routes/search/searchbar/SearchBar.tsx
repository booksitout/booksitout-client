import React, {useEffect, useRef} from 'react'
import styled from 'styled-components';
import booksitoutIcon from "../../../config/BooksitoutIcon";
import breakpoints from "../../../config/Breakpoints";
import ColorConfig from "../../../config/ColorConfig";
import SearchHistoryResponse from "../../../common/response/SearchHistoryResponse";
import AutoCompleteResponse from "../../../common/response/AutoCompleteResponse";

interface Props {
    placeholder: string

    query: string
    queryHistories: SearchHistoryResponse[]
    querySuggestions: AutoCompleteResponse[],

    isShowingQueryHistory: boolean
    isShowingAutoComplete: boolean
    isFocusOnAppear?: boolean

    setQuery: (query: string) => void
    setIsShowingQueryHistory: (isShowingQueryHistory: boolean) => void
    handleSubmit: ((event: React.FormEvent<HTMLFormElement>) => void) | null
}

let defaultHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
};

const SearchBar: React.FC<Props> = ({
                                        placeholder,

                                        query,
                                        queryHistories,
                                        querySuggestions,

                                        isShowingQueryHistory,
                                        isShowingAutoComplete,
                                        isFocusOnAppear,

                                        setQuery,
                                        setIsShowingQueryHistory,
                                        handleSubmit = defaultHandleSubmit,
                                    }) => {
    const htmlInputRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (htmlInputRef.current && isFocusOnAppear == true) {
            htmlInputRef.current.focus()
        }
    }, []);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value ?? '');
    };

    const handleOnFocus = () => {
        setIsShowingQueryHistory(true)
    }

    const handleOnBlur = () => {
        setTimeout(() => {
            setIsShowingQueryHistory(false)
        }, 200)
    }

    return (
        <SearchContainer onSubmit={handleSubmit}>
            <Input
                ref={htmlInputRef}
                placeholder={placeholder}
                value={query}
                onChange={handleInputChange}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
            />

            <SearchButton type="submit">
                <span><booksitoutIcon.search/></span>
            </SearchButton>

            {isShowingQueryHistory &&
                <AutocompleteBox>
                    {
                        queryHistories
                            .map((queryHistory, index) =>
                                <Suggestion href={queryHistory.url} key={index}>
                                    {queryHistory.imageUrl && <SuggestionImage src={queryHistory.imageUrl}/>}
                                    <SuggestionName>{queryHistory.query}</SuggestionName>
                                </Suggestion>
                            )
                    }
                </AutocompleteBox>
            }

            {isShowingAutoComplete &&
                <AutocompleteBox>
                    {
                        querySuggestions
                            .map((suggestion, index) =>
                                <Suggestion href={suggestion.url} key={index}>
                                    <SuggestionImage src={suggestion.imageUrl}/>
                                    <SuggestionName>{suggestion.name}</SuggestionName>
                                </Suggestion>
                            )
                    }
                </AutocompleteBox>
            }
        </SearchContainer>
    )
}

const Input = styled.input`
    flex-grow: 1;
    border: none;
    border-radius: 0;
    outline: none;
    padding: 10px 20px;
    font-size: 16px;
    min-width: 280px;

    @media screen and (max-width: ${breakpoints.md}px) {
        max-width: 350px;
    }
`;

const SearchButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px 10px 10px;
    color: ${ColorConfig.Primary};
`;

const Suggestion = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;

    padding: 10px 10px 10px 30px;

    &:hover {
        background-color: #f2f2f2;
    }
`;

const SearchContainer = styled.form`
    display: flex;
    position: relative;
    align-items: center;
    border: 2px solid ${ColorConfig.Primary};
    border-radius: 10px;
    padding: 5px 10px;
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
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

import styled from 'styled-components';
import SearchBarWithHistoryAndSuggestion from '../../search/searchbar/SearchBarWithHistoryAndSuggestion';
import breakpoints from '../../../config/Breakpoints';
import ApiUrls from '../../../ApiUrls';

const IndexSearchBar = () => {
    return (
        <Container>
            <SearchBarContainer>
                <SearchBarWithHistoryAndSuggestion
                    autoCompleteApiUrl={ApiUrls.Search.AutoComplete.GET}
                    searchHistoryApiUrl={ApiUrls.Search.BookHistory.GET}
                    searchResultUrl={'/search'}
                    searchHistoryCacheKey={'search-book-histories'}
                    placeholder={'여러곳에서 1번에 책 검색하기'} 
                />
            </SearchBarContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const SearchBarContainer = styled.div`
    width: 50%;

    @media screen and (max-width: ${breakpoints.md}) {
        width: 100%;
    }
`;

export default IndexSearchBar
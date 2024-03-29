import styled from 'styled-components';
import SearchBar from '../../search/searchbar/SearchBar';
import breakpoints from '../../../config/breakpoints';
import ApiUrls from '../../../ApiUrls';

const IndexSearchBar = () => {
    return (
        <Container>
            <SearchBarContainer>
                <SearchBar 
                    autoCompleteApiUrl={ApiUrls.Search.AutoComplete.GET}
                    searchResultUrl={'/search'} 
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
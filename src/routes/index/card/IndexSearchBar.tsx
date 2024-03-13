import styled from 'styled-components';
import SearchBar from '../../search/searchbar/SearchBar';
import breakpoints from '../../../config/breakpoints';
const IndexSearchBar = () => {


    return (
        <Container>
            <SearchBarContainer>
                <SearchBar />
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
import styled from 'styled-components';
import RouteContainer from "../../../common/styles/RouteContainer"
import RowSpacer from "../../../common/styles/RowSpacer"
import SearchBarWithHistoryAndSuggestion from "../../search/searchbar/SearchBarWithHistoryAndSuggestion"
import breakpoints from '../../../config/Breakpoints';
import ApiUrls from '../../../ApiUrls';
import booksitoutIcon from '../../../config/BooksitoutIcon';
import RouteTitle from '../../../common/RouteTitle/RouteTitle';
import RouteTitleConfig from '../../../config/RouteTitleConfig';
import LibraryByBookCountCard from './LibraryByBookCountCard';

const LibraryRoute = () => {
    return (
        <RouteContainer>
            <RouteTitle
                icon={<booksitoutIcon.library />}
                title={'도서관 찾기'}
                subTitle={'여러 조건으로 도서관을 찾을 수 있어요'}
                currentKey={'library'}
                buttons={RouteTitleConfig.Library}
            />

            <RowSpacer />
            <SearchBarContainerContainer>
                <SearchBarContainer>
                    <SearchBarWithHistoryAndSuggestion
                        autoCompleteApiUrl={ApiUrls.Library.Search.AUTO_COMPLETE}
                        searchHistoryApiUrl={null}
                        searchHistoryCacheKey={null}
                        searchResultUrl={'/library/search'}
                        placeholder={'이름, 지역으로 도서관 찾기'}                     
                    />
                </SearchBarContainer>
            </SearchBarContainerContainer>
            <RowSpacer size={60} />

            <LibraryByBookCountCard />
            <RowSpacer />
        </RouteContainer>
    )
}

const SearchBarContainerContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const SearchBarContainer = styled.div`
    width: 50%;

    @media screen and (max-width: ${breakpoints.md}) {
        width: 100%;
    }
`;

export default LibraryRoute
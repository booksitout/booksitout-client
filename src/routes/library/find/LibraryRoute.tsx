import styled from 'styled-components';
import RouteContainer from "../../../common/styles/RouteContainer"
import RowSpacer from "../../../common/styles/RowSpacer"
import SearchBar from "../../search/searchbar/SearchBar"
import breakpoints from '../../../config/breakpoints';
import ApiUrls from '../../../ApiUrls';
import booksitoutIcon from '../../../config/booksitoutIcon';
import RouteTitle from '../../../common/RouteTitle/RouteTitle';

const LibraryRoute = () => {
    return (
        <RouteContainer>
            <RouteTitle
                icon={<booksitoutIcon.library />}
                title={'도서관 찾기'}
                subTitle={'여러 조건으로 도서관을 찾을 수 있어요'}
                currentKey={'library'}
                buttons={
                    [
                        {
                            url: '/library',
                            key: 'library',
                            label: '도서관 찾기',
                        },
                        {
                            url: '/library/membership',
                            key: 'membership',
                            label: '회원증',
                        },
                        {
                            url: '/library/near',
                            key: 'library-near',
                            label: '내 주변 도서관',
                        },
                    ]
                }
            />

            <RowSpacer />
            <SearchBarContainerContainer>
                <SearchBarContainer>
                    <SearchBar
                        autoCompleteApiUrl={ApiUrls.Library.Search.AUTO_COMPLETE}
                        searchResultUrl={'/library/search'}
                        placeholder={'이름, 지역으로 도서관 찾기'}
                    />
                </SearchBarContainer>
            </SearchBarContainerContainer>

            <RowSpacer size={350}/>
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
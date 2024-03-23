import { useEffect } from 'react'
import styled from 'styled-components';
import RouteContainer from '../../../common/styles/RouteContainer'
import RouteTitle from '../../../common/RouteTitle/RouteTitle'
import booksitoutIcon from '../../../config/booksitoutIcon'
import { RouteButtonGroupType } from '../../../common/RouteTitle/RouteButtonGroupType'
import useLoginStore from '../../login/useLoginStore'
import InfiniteScroll from 'react-infinite-scroll-component'
import useLibraryMembershipList from '../useLibraryMembershipList';
import LibraryMembershipCard from './LibraryMembershipCard';
import LibraryMembershipCardLoading from './LibraryMembershipCardLoading';
import RowSpacer from '../../../common/styles/RowSpacer';
import NoContent from '../../../common/NoContent';

const LibraryMembershipRoute = () => {
    useEffect(() => {
        document.title = '도서관 회원증 | 책잇아웃'
    }, [])

    const buttons: RouteButtonGroupType[] = [
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

    const isLoggedIn = useLoginStore((state) => state.isLoggedIn())

    return (
        <RouteContainer>
            <RouteTitle
                icon={<booksitoutIcon.membership />}
                title={'도서관 회원증'}
                subTitle={'여러 도서관 회원증을 쉽게 관리할 수 있어요'}
                currentKey={'membership'}
                buttons={buttons}
            />

            {
                isLoggedIn ? <YesLoginCase /> : <NoLoginCase />
            }
        </RouteContainer>
    )
}

const YesLoginCase = () => {
    const [libraryMemberships, isLoading, paging] = useLibraryMembershipList()

    return (
        <InfiniteScroll
            loader={
                <Row>
                    <Col>
                        <LibraryMembershipCardLoading />
                    </Col>
                    <Col>
                        <LibraryMembershipCardLoading />
                    </Col>
                    <Col>
                        <LibraryMembershipCardLoading />
                    </Col>
                    <RowSpacer />
                </Row>
            }
            next={paging.fetchNext}
            hasMore={paging.hasMore}
            dataLength={paging.totalPages}
            className='overflow-hidden'
        >
            <Row>
                <RowSpacer />

                {
                    libraryMemberships.map((membership, _) => {
                        return (
                            <Col>
                                <LibraryMembershipCard membership={membership} />
                                <RowSpacer />
                            </Col>
                        )
                    })
                }
            </Row>
        </InfiniteScroll>
    )
}

const NoLoginCase = () => {
    return (
        <NoContent message={'도서관 회원증을 관리하기 위해서는 로그인 해 주세요'} />
    )
}

const Row = styled.div.attrs({
    className: 'row'
})``;

const Col = styled.div.attrs({
    className: 'col-12 col-md-6 col-xl-4'
})`
`;

export default LibraryMembershipRoute
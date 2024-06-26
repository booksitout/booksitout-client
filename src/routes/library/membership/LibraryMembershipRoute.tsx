import { useEffect } from 'react'
import styled from 'styled-components';
import RouteContainer from '../../../common/styles/RouteContainer'
import RouteTitle from '../../../common/RouteTitle/RouteTitle'
import booksitoutIcon from '../../../config/BooksitoutIcon'
import useLoginStore from '../../login/useLoginStore'
import InfiniteScroll from 'react-infinite-scroll-component'
import useLibraryMembershipList from '../useLibraryMembershipList';
import LibraryMembershipCard from './LibraryMembershipCard';
import LibraryMembershipCardLoading from './LibraryMembershipCardLoading';
import RowSpacer from '../../../common/styles/RowSpacer';
import RouteTitleConfig from '../../../config/RouteTitleConfig';
import Login from '../../../common/Login';

const LibraryMembershipRoute = () => {
    useEffect(() => {
        document.title = '도서관 회원증 | 책잇아웃'
    }, [])

    const isLoggedIn = useLoginStore((state) => state.isLoggedIn())

    return (
        <RouteContainer>
            <RouteTitle
                icon={<booksitoutIcon.membership />}
                title={'도서관 회원증'}
                subTitle={'여러 도서관 회원증을 쉽게 관리할 수 있어요'}
                currentKey={'membership'}
                buttons={RouteTitleConfig.Library}
            />

            {
                isLoggedIn ? <YesLoginCase /> : <NoLoginCase />
            }
        </RouteContainer>
    )
}

const YesLoginCase = () => {
    const [isLoading, libraryMemberships, paging] = useLibraryMembershipList()

    return (
        <InfiniteScroll
            loader={
                <Row>
                    {
                        Array.from({ length: 6 }, (_, i) => {
                            return (
                                <Col>
                                    <LibraryMembershipCardLoading />
                                    <RowSpacer />
                                </Col>
                            )
                        })
                    }
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
        <>
            <RowSpacer size={40} />
            <Login message={'로그인해 도서관 회원증 관리하기'}  />
        </>
    )
}

const Row = styled.div.attrs({
    className: 'row'
})`
    padding-left: 5px;
    padding-right: 5px;
`;

const Col = styled.div.attrs({
    className: 'col-12 col-md-6 col-xl-4'
})`
`;

export default LibraryMembershipRoute
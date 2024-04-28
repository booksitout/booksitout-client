import styled from 'styled-components';
import { useEffect } from 'react'
import RouteContainer from '../../../common/styles/RouteContainer'
import RouteTitle from '../../../common/RouteTitle/RouteTitle'
import booksitoutIcon from '../../../config/booksitoutIcon'
import useLoginStore from '../../login/useLoginStore';
import RouteTitleConfig from '../../../config/RouteTitleConfig';
import Login from '../../../common/Login';
import RowSpacer from '../../../common/styles/RowSpacer';
import useMineBookList from './useMineBookList';
import BookMineListRange from './BookMineListRange';
import InfiniteScroll from 'react-infinite-scroll-component';
import InfiniteScrollLoading from '../../../common/InfiniteScrollLoading';
import BookMineCard from './BookMineCard';
import BookMineRangeSelector from './BookMineRangeSelector';
import useUrlQuery from '../../../common/hooks/useUrlQuery';
import BookMineLoadingCard from './BookMineLoadingCard';

const BookMineRoute = () => {
    useEffect(() => {
        document.title = '내 서재 | 책잇아웃'
    }, [])

    const isLoggedIn = useLoginStore((state) => state.isLoggedIn())

    return (
        <RouteContainer>
            <RouteTitle
                icon={<booksitoutIcon.book />}
                title={'내 서재'}
                subTitle={'내가 등록한 책을 확인하고 관리할 수 있어요'}
                currentKey={'mine'}
                buttons={RouteTitleConfig.Book}
                rightUi={undefined}
            />

            {isLoggedIn ? <YesLoggedInCase /> : <NoLoggedInCase />}
        </RouteContainer>
    )
}

const YesLoggedInCase = () => {
    const range = useUrlQuery('range') as BookMineListRange
    const [isLoading, bookList, paging] = useMineBookList(range)

    return (
        <>
            <RowSpacer />
            <BookMineRangeSelector />

            {
                isLoading
                    ?
                    <Loading />
                    :
                    <InfiniteScroll
                        loader={<Loading />}
                        next={paging.fetchNext}
                        hasMore={paging.hasMore}
                        dataLength={bookList.length}
                        className='overflow-hidden'
                    >
                        <RowSpacer size={10} />
                        <Row>
                            {bookList.map((book, _) => {
                                return (
                                    <Col key={book.id}>
                                        <BookMineCard book={book} />
                                    </Col>
                                )
                            })}
                        </Row>
                    </InfiniteScroll>
            }
        </>
    )
}

const Loading = () => {
    return (
        <>
            <RowSpacer size={10} />
            <Row>
                {
                    Array.from({ length: 12 }).map((_, index) => {
                        return (
                            <Col key={index}>
                                <BookMineLoadingCard />
                            </Col>
                        )
                    })
                }
            </Row>
        </>
    )
}

const NoLoggedInCase = () => {
    return (
        <>
            <RowSpacer size={40} />
            <Login message={'로그인해 내 서재 보기'} />
        </>
    )
}

const Row = styled.div.attrs({
    className: 'row row-eq-height'
})`
`;

const Col = styled.div.attrs({
    className: 'col-6 col-md-4 col-lg-3 col-xl-2'
})`
    height: 100%;
`;

export default BookMineRoute
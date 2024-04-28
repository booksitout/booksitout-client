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
import BookMineCard from './BookMineCard';
import BookMineRangeSelector from './BookMineRangeSelector';
import useUrlQuery from '../../../common/hooks/useUrlQuery';
import BookMineLoadingCard from './BookMineLoadingCard';
import BooksByYear from './BooksByYear';

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
    const [isLoading, bookList, bookListByYear, paging] = useMineBookList(range)

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
                            {
                                range === BookMineListRange.DONE ?
                                <BookDoneList bookListByYear={bookListByYear}  />
                                :
                                bookList.map((book, _) => {
                                    return (
                                        <Col key={book.id}>
                                            <BookMineCard book={book} />
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </InfiniteScroll>
            }
        </>
    )
}

interface Props {
    bookListByYear: BooksByYear
}

const BookDoneList: React.FC<Props> = ({ bookListByYear }) => {
    const sortedYears = Object.keys(bookListByYear)
        .map(Number)
        .sort((a, b) => b - a)

    return (
        <>
            {sortedYears.map(year => {
                const books = bookListByYear[year];

                return (
                    <>
                        <h3 className={`text-start pb-3 ms-2 ${sortedYears[0] !== year && 'pt-5'}`}>{year}년</h3>

                        {books.map(book => (
                            <Col key={book.id}>
                                <BookMineCard book={book} />
                            </Col>
                        ))}
                    </>
                );
            })}
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
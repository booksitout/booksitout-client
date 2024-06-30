import { useParams } from "react-router-dom"
import RouteContainer from "../../../common/styles/RouteContainer"
import useBookDetail from "../useBookDetail"
import NoContent from "../../../common/NoContent"
import RowSpacer from '../../../common/styles/RowSpacer';
import BookDetailInfoCard from './BookDetailInfoCard';
import BookDetailMemoCard from './memo/BookDetailMemoCard';
import BookDetailReadingSessionCard from './reading-session/BookDetailReadingSessionCard';
import RouteTitle from '../../../common/RouteTitle/RouteTitle';
import booksitoutIcon from '../../../config/BooksitoutIcon';
import RouteTitleConfig from '../../../config/RouteTitleConfig';

const BookDetailRoute = () => {
    const { bookId } = useParams()
    const [bookDetail, isLoading, isError] = useBookDetail(Number(bookId))

    if (isLoading) {
        return <></>
    }

    if (isError || bookDetail == null) {
        return <NoContent message={"찾으시는 책이 없어요."} />
    }

    return (
        <RouteContainer>
            <RouteTitle
                icon={<booksitoutIcon.book />}
                title={'내 서재'}
                subTitle={'다른 사람의 서재를 구경할 수 있어요'}
                currentKey={'mine'}
                buttons={RouteTitleConfig.Book}
                rightUi={undefined}
            />

            <RowSpacer />
            <BookDetailInfoCard book={bookDetail?.book!!} />

            <RowSpacer size={10} />
            <BookDetailMemoCard memos={bookDetail?.memos ?? []} />

            <RowSpacer size={10} />
            <BookDetailReadingSessionCard readingSessions={bookDetail?.readingSessions ?? []} />
        </RouteContainer>
    )
}

export default BookDetailRoute
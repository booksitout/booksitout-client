import { Card } from 'react-bootstrap'
import CardTitle from '../../../common/styles/CardTitle'
import { usePopularBooks } from './usePopularBooks'
import CardBodyContentContainer from '../../../common/styles/CardBodyContentContainer'
import PopularBookListRow from './PopularBookListRow'
import CardTitleImageIcon from '../../../common/CardTitleImageIcon'
import ImageConfig from '../../../config/ImageConfig'
import PopularBookListRowLoading from './PopularBookListRowLoading'

const PopularBooksAladinCard = () => {
    const [isLoading, popularBooks] = usePopularBooks('ALADIN', 10)

    return (
        <Card>
            <CardBodyContentContainer height={1500}>
                <CardTitle icon={<CardTitleImageIcon logo={ImageConfig.Logo.ALADIN} />} title={'알라딘 베스트셀러'} url={'/community/popular-books/aladin'} />

                {isLoading ?
                    Array(100)
                        .fill(0)
                        .map((_, index) => <PopularBookListRowLoading index={index + 1} />)
                    :
                    popularBooks.map((book) => <PopularBookListRow popularBook={book} />)}
            </CardBodyContentContainer>
        </Card>
    )
}

export default PopularBooksAladinCard
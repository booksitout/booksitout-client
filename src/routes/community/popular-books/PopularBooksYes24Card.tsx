import { Card } from 'react-bootstrap'
import CardTitle from '../../../common/styles/CardTitle'
import CardBodyContentContainer from '../../../common/styles/CardBodyContentContainer'
import { usePopularBooks } from './usePopularBooks'
import PopularBookListRow from './PopularBookListRow'
import CardTitleImageIcon from '../../../common/CardTitleImageIcon'
import ImageConfig from '../../../config/ImageConfig'
import PopularBookListRowLoading from './PopularBookListRowLoading'

const PopularBooksYes24Card = () => {
    const [isLoading, popularBooks] = usePopularBooks('YES24', 10)

    return (
        <Card>
            <CardBodyContentContainer height={1500}>
                <CardTitle icon={<CardTitleImageIcon logo={ImageConfig.Logo.YES24} />} title={'YES24 베스트셀러'} url={'/community/popular-books/yes24'} />

                {isLoading ?
                    Array(100)
                        .fill(0)
                        .map((_, index) => <PopularBookListRowLoading index={index + 1} />)
                    : popularBooks.map((book) => <PopularBookListRow popularBook={book} />)}
            </CardBodyContentContainer>
        </Card>
    )
}

export default PopularBooksYes24Card
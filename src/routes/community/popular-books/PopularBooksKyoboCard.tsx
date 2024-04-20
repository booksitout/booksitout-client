import { Card } from 'react-bootstrap'
import CardTitle from '../../../common/styles/CardTitle'
import CardBodyBackgroundContainer from '../../../common/styles/CardBodyBackgroundContainer'
import PopularBookListRow from './PopularBookListRow'
import { usePopularBooks } from './usePopularBooks'
import CardTitleImageIcon from '../../../common/CardTitleImageIcon'
import ImageConfig from '../../../config/ImageConfig'
import PopularBookListRowLoading from './PopularBookListRowLoading'

const PopularBooksKyoboCard = () => {
    const [isLoading, popularBooks] = usePopularBooks('KYOBO', 20)

    return (
        <Card>
            <CardBodyBackgroundContainer height={3000}>
                <CardTitle icon={<CardTitleImageIcon logo={ImageConfig.Logo.KYOBO} />} title={'교보문고 베스트셀러'} url={'/community/popular-books/kyobo'} />

                {isLoading ?
                    Array(100)
                        .fill(0)
                        .map((_, index) => <PopularBookListRowLoading index={index + 1} />)
                    :
                    popularBooks.map((book) => <PopularBookListRow popularBook={book} />)}
            </CardBodyBackgroundContainer>
        </Card>
    )
}

export default PopularBooksKyoboCard
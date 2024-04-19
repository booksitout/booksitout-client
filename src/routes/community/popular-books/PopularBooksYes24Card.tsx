import { Card } from 'react-bootstrap'
import CardTitle from '../../../common/styles/CardTitle'
import CardBodyBackgroundContainer from '../../../common/styles/CardBodyBackgroundContainer'
import { usePopularBooks } from './usePopularBooks'
import PopularBookListRow from './PopularBookListRow'
import CardTitleImageIcon from '../../../common/CardTitleImageIcon'
import ImageConfig from '../../../config/ImageConfig'

const PopularBooksYes24Card = () => {
    const [isLoading, popularBooks] = usePopularBooks('YES24', 20)

    return (
        <Card>
            <CardBodyBackgroundContainer height={3000}>
                <CardTitle icon={<CardTitleImageIcon logo={ImageConfig.Logo.YES24} />} title={'YES24 베스트셀러'} url={'/community/popular-books/yes24'} />

                {popularBooks.map((book) => <PopularBookListRow popularBook={book} />)}
            </CardBodyBackgroundContainer>
        </Card>
    )
}

export default PopularBooksYes24Card
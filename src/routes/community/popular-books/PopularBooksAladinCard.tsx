import { Card } from 'react-bootstrap'
import CardTitle from '../../../common/styles/CardTitle'
import { usePopularBooks } from './usePopularBooks'
import CardBodyBackgroundContainer from '../../../common/styles/CardBodyBackgroundContainer'
import PopularBookListRow from './PopularBookListRow'
import CardTitleImageIcon from '../../../common/CardTitleImageIcon'
import ImageConfig from '../../../config/ImageConfig'

const PopularBooksAladinCard = () => {
    const [isLoading, popularBooks] = usePopularBooks('ALADIN', 20)

    return (
        <Card>
            <CardBodyBackgroundContainer height={3000}>
                <CardTitle icon={<CardTitleImageIcon logo={ImageConfig.Logo.ALADIN} />} title={'알라딘 베스트셀러'} url={'/community/popular-books/aladin'} />

                {popularBooks.map((book) => <PopularBookListRow popularBook={book} />)}
            </CardBodyBackgroundContainer>
        </Card>
    )
}

export default PopularBooksAladinCard
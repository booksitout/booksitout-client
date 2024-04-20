import styled from 'styled-components';
import RouteContainer from '../../../common/styles/RouteContainer'
import RouteTitle from '../../../common/RouteTitle/RouteTitle'
import booksitoutIcon from '../../../config/booksitoutIcon'
import RouteTitleConfig from '../../../config/RouteTitleConfig'
import RowSpacer from '../../../common/styles/RowSpacer'
import { useParams } from 'react-router-dom'
import { usePopularBooks } from './usePopularBooks'
import PopularBookListRow from './PopularBookListRow'
import CardTitleImageIcon from '../../../common/CardTitleImageIcon'
import ImageConfig from '../../../config/ImageConfig'
import CardTitle from '../../../common/styles/CardTitle';
import PopularBookListRowLoading from './PopularBookListRowLoading';

const PopularBooksProviderRoute = () => {
    const { provider } = useParams<{ provider: 'YES24' | 'ALADIN' | 'KYOBO' }>()
    const [isLoading, popularBooks] = usePopularBooks(provider ?? 'ALADIN', 100)

    return (
        <RouteContainer>
            <RouteTitle
                icon={<booksitoutIcon.community />}
                title={'인기책'}
                subTitle={'지금 책잇아웃에서 인기 있는 책을 만나보세요'}
                currentKey={'popular'}
                buttons={RouteTitleConfig.Community}
                rightUi={undefined}
            />

            <RowSpacer />
            <Container>
                {
                    provider?.toUpperCase() === 'ALADIN' ?
                        <CardTitle icon={<CardTitleImageIcon logo={ImageConfig.Logo.ALADIN} />} title={'알라딘 베스트셀러'} url={''} />
                        :
                        provider?.toUpperCase() === 'YES24' ?
                            <CardTitle icon={<CardTitleImageIcon logo={ImageConfig.Logo.YES24} />} title={'YES24 베스트셀러'} url={''} />
                            :
                            provider?.toUpperCase() === 'KYOBO' ?
                                <CardTitle icon={<CardTitleImageIcon logo={ImageConfig.Logo.KYOBO} />} title={'교보문고 베스트셀러'} url={''} />
                                :
                                <CardTitle icon={<CardTitleImageIcon logo={ImageConfig.Logo.BOOKSITOUT} />} title={'책잇아웃 베스트셀러'} url={''} />
                }
            </Container>

            <RowSpacer />
            {isLoading ?
                Array(100)
                    .fill(0)
                    .map((_, index) => index + 1)
                    .map((index) => <PopularBookListRowLoading index={index} />)
                :
                popularBooks.map((book) => <PopularBookListRow popularBook={book} />)}
        </RouteContainer>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default PopularBooksProviderRoute
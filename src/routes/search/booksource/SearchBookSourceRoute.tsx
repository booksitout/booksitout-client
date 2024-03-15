import styled from 'styled-components';
import { useParams } from "react-router-dom"
import RouteContainer from "../../../common/styles/RouteContainer"
import useBook from "./useBook"
import { Card } from "react-bootstrap"
import CardBodyContainer from "../../../common/styles/CardBodyContainer"
import RowSpacer from "../../../common/styles/RowSpacer"
import useBookSubscription from './useBookSubscription';
import useBookLibraryOnline from './useBookLibraryOnline';
import ColSpacer from '../../../common/styles/ColSpacer';
import useBookUsedOnline from './useBookUsedOnline';
import useBookUsedOffline from './useBookUsedOffline';
import getBookSourceIcon from './getBookSourceIcon';

const SearchBookSourceRoute = () => {
    const { isbn13 } = useParams()

    const book = useBook(isbn13 ?? '')
    const subscriptions = useBookSubscription(isbn13 ?? '')
    const librariesOnline = useBookLibraryOnline(isbn13 ?? '')
    const usedOnline = useBookUsedOnline(isbn13 ?? '')
    const usedOffline = useBookUsedOffline(isbn13 ?? '')

    return (
        <RouteContainer>
            <RowSpacer />
                <Card>
                    <CardBodyContainer height={475}>
                        <Container>
                            <BookContainer>
                                <Cover src={book?.cover} alt="" />
                                <RowSpacer size={10} />
                                <Title>{book?.title}</Title>
                                <Authors>{book?.authors}</Authors>
                            </BookContainer>

                            <ColSpacer />

                            <BookSourceContainer>
                                {subscriptions?.map((subscription) => {
                                    return (
                                        <>
                                            <div>{subscription.link}</div>
                                            <img src={getBookSourceIcon(subscription.provider)} alt=''/>
                                        </>
                                    )
                                })}
                            </BookSourceContainer>

                            <BookSourceContainer>
                                {librariesOnline?.map((subscription) => {
                                    return (
                                        <>
                                            <div>{subscription.link}</div>
                                            <img src={getBookSourceIcon(subscription.provider)} alt='' />
                                        </>
                                    )
                                })}
                            </BookSourceContainer>

                            <BookSourceContainer>
                                {
                                    usedOnline.map((used) => {
                                        return (
                                            <>
                                                <div>{used.link}</div>
                                                <div>{used.locationList}</div>
                                                <div>{used.minPrice}</div>
                                                <img src={used.provider} alt="" />
                                                <div>{used.stockCount}</div>
                                            </>
                                        )
                                    })
                                }
                            </BookSourceContainer>

                            <BookSourceContainer>
                                {
                                    usedOffline.map((used) => {
                                        return (
                                            <>
                                                <div>{used.link}</div>
                                                <div>{used.locationList}</div>
                                                <div>{used.minPrice}</div>
                                                <img src={used.provider} alt="" />
                                                <div>{used.stockCount}</div>
                                            </>
                                        )
                                    })
                                }
                            </BookSourceContainer>
                        </Container>
                    </CardBodyContainer>
                </Card>
            <RowSpacer />
        </RouteContainer>
    )
}

const Container = styled.div`
    display: flex;
    padding: 25px;
`;

const BookSourceContainer = styled.div`
  
`;

const BookContainer = styled.div`
    text-align: center;
`;

const Cover = styled.img.attrs({
    className: 'img-fluid rounded border'
})`
    height: 300px;
`;

const Title = styled.h1`
    font-size: 1.5rem;
`;

const Authors = styled.h1.attrs({
    className: 'text-secondary'
})`
    font-size: 1rem;
`;

export default SearchBookSourceRoute
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
import utils from '../../../common/utils';
import IndexContentContainer from '../../index/IndexContentContainer';
import SearchBookSourceEmpty from './SearchBookSourceEmpty';
import useUrlQuery from '../../../common/hooks/useUrlQuery';
import useBookLibraryOffline from './useBookLibraryOffline';
import SearchBookLoading from './SearchBookLoading';
import booksitoutIcon from '../../../config/booksitoutIcon';
import useCurrentLocation from '../../library/useCurrentLocation';

const SearchBookSourceRoute = () => {
    const { isbn13 } = useParams()
    const query = useUrlQuery('q')

    const book = useBook(isbn13 ?? '')

    const [subscriptions, isSubscriptionLoading] = useBookSubscription(isbn13 ?? '', query ?? '')
    const [librariesOnline, isLibraryOnlineLoading] = useBookLibraryOnline(isbn13 ?? '', query ?? '')
    const [usedOnline, isUsedOnlineLoading] = useBookUsedOnline(isbn13 ?? '', query ?? '')
    const [usedOffline, isUsedOfflineLoading] = useBookUsedOffline(isbn13 ?? '', query ?? '')

    const [lat, long, locationName] = useCurrentLocation()
    const [librariesOffline, isLibraryOfflineLoading] = useBookLibraryOffline(isbn13 ?? '', lat, long)

    return (
        <RouteContainer>
            <RowSpacer />
            <Card>
                <CardBodyContainer height={400}>
                    <BookContainer>
                        <CoverContainer>
                            <Cover src={book?.cover} alt="" />
                        </CoverContainer>

                        <BookContentContainer>
                            <Title>{book?.title}</Title>
                            <Authors>{book?.authors}</Authors>
                        </BookContentContainer>
                    </BookContainer>
                </CardBodyContainer>
            </Card>

            <RowSpacer />
            <Card>
                <CardContainer>
                    <LibraryTitleContainer>
                        <SourceTitle>도서관</SourceTitle>
                        <LibraryLocationName>{locationName}</LibraryLocationName>
                    </LibraryTitleContainer>

                    <ProviderContainer>
                        {isLibraryOfflineLoading ?
                            <SearchBookLoading />
                        :
                        librariesOffline == null || librariesOffline.length === 0 ?
                            <SearchBookSourceEmpty />
                        :
                            librariesOffline?.map((library) => {
                                return (
                                    <ColLibrary>
                                            <Provider href={library.link}>
                                                <div>{library.library.name}</div>
                                            </Provider>
                                    </ColLibrary>
                                )
                            })
                        }
                    </ProviderContainer>
                </CardContainer>
            </Card>

            <RowSpacer />
            <Card>
                <CardContainer>
                    <BookSourceContainer>
                        <SourceTitle>도서관 (온라인)</SourceTitle>

                        <ProviderContainer>
                            {isLibraryOnlineLoading ?
                                <SearchBookLoading />
                            :
                            librariesOnline == null || librariesOnline.length === 0 ?
                                <SearchBookSourceEmpty />
                            :
                                librariesOnline?.map((library) => {
                                    return (
                                        <Col>
                                            <Provider href={library.link}>
                                                <ProviderIcon src={getBookSourceIcon(library.provider)} alt='' />
                                                <div className='m-0 p-0'>
                                                    {
                                                        library.loanPossible 
                                                        ?
                                                        <booksitoutIcon.check className='text-book me-2 mb-1' />
                                                        :
                                                        <booksitoutIcon.xmark className='text-danger me-2 mb-1' />
                                                    }
                                                    {library.loanPossible ? '대출가능' : '대출불가'}
                                                </div>
                                            </Provider>
                                        </Col>
                                    )
                                })
                            }
                        </ProviderContainer>
                    </BookSourceContainer>
                </CardContainer>
            </Card>

            <RowSpacer />
            <Card>
                <CardContainer>
                    <BookSourceContainer>
                        <SourceTitle>구독</SourceTitle>

                        <ProviderContainer>
                            {isSubscriptionLoading ?
                                <SearchBookLoading />
                            :
                            subscriptions == null || subscriptions.length === 0 ?
                                <SearchBookSourceEmpty />
                            :
                                subscriptions?.map((subscription) => {
                                    return (
                                            <Col>
                                                <Provider href={subscription.link}>
                                                    <ProviderIcon src={getBookSourceIcon(subscription.provider)} alt=''/>
                                                </Provider>
                                            </Col>
                                        )
                                    }
                                )
                            }
                        </ProviderContainer>
                    </BookSourceContainer>
                </CardContainer>
            </Card>

            <RowSpacer />
            <Card>
                <CardContainer>
                    <BookSourceContainer>
                        <SourceTitle>중고 (온라인)</SourceTitle>

                        <ProviderContainer>
                            {
                                isUsedOnlineLoading ?
                                    <SearchBookLoading />
                                :
                                usedOnline == null || usedOnline.length === 0 ?
                                    <SearchBookSourceEmpty />
                                :
                                usedOnline.map((used) => {
                                        return (
                                            <ColUsed>
                                                <Provider href={used.link}>
                                                    <ProviderIcon src={getBookSourceIcon(used.provider)} alt=''/>
                                                    <div>최저 {utils.insertCommas(used.minPrice)}원</div>
                                                </Provider>
                                            </ColUsed>
                                        )
                                    }
                                )
                            }
                        </ProviderContainer>
                    </BookSourceContainer>
                </CardContainer>
            </Card>

            <RowSpacer />
            <Card>
                <CardContainer>
                    <BookSourceContainer>
                        <SourceTitle>중고 (매장)</SourceTitle>

                        <ProviderContainer>
                            {
                                isUsedOfflineLoading ?
                                    <SearchBookLoading />
                                :
                                usedOffline == null || usedOffline.length === 0 ?
                                    <SearchBookSourceEmpty />
                                :
                                usedOffline.map((used) => {
                                    return (
                                        <ColUsed>
                                            <Provider href={used.link}>
                                                <ProviderIcon src={getBookSourceIcon(used.provider)} alt=''/>
                                                <div>최저 {utils.insertCommas(used.minPrice)}원</div>
                                            </Provider>
                                        </ColUsed>
                                    )
                                })
                            }
                        </ProviderContainer>
                    </BookSourceContainer>
                </CardContainer>
            </Card>
        </RouteContainer>
    )
}

const CardContainer = styled(CardBodyContainer).attrs({
    height: 425
})`
    padding: 25px;
`;

const BookSourceContainer = styled.div`
`;

const BookContainer = styled.div.attrs({
    className: 'row'
})`
    padding: 25px;
`;

const CoverContainer = styled.div.attrs({
    className: 'col-12 col-md-4'
})`
    text-align: center;
`;

const Cover = styled.img.attrs({
    className: 'img-fluid rounded border'
})`
    max-height: 300px;
`;

const BookContentContainer = styled.div.attrs({
    className: 'col-12 col-md-8 pt-4 pt-md-0'
})`
`;

const Title = styled.h2`
`;

const Authors = styled.h5.attrs({
    className: 'text-secondary'
})`
`;

const SourceTitle = styled.h3`
    padding-bottom: 10px;
`;

const ProviderContainer = styled.div.attrs({
    className: 'row'
})`
`;

const Provider = styled(IndexContentContainer).attrs({
    target: '_blank'
})`
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const ProviderIcon = styled.img.attrs({
    className: 'img-fluid rounded border'
})`
    width: 50px;
    height: 50px;

    border-radius: 100px;
`;

const Col = styled.div.attrs({
    className: 'col-4 col-md-2'
})`
`;

const ColLibrary = styled.div.attrs({
    className: 'col-6 col-md-4'
})`
  
`;

const ColUsed = styled.div.attrs({
    className: 'col-6 col-md-3'
})`
`;

const LibraryTitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const LibraryLocationName = styled.div.attrs({
    className: 'text-secondary'
})`
`;

export default SearchBookSourceRoute
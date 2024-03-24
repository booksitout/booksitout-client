import styled from 'styled-components';
import { Card } from 'react-bootstrap'
import CardBodyContainer from '../../../common/styles/CardBodyContainer'
import CardTitle from '../../../common/styles/CardTitle'
import booksitoutIcon from '../../../config/booksitoutIcon'
import useLibraryNear from '../../library/useLibraryNear'
import useCurrentLocation from '../../library/useCurrentLocation';
import NoContent from '../../../common/NoContent';
import ReloadButton from '../../../common/styles/ReloadButton';
import LibraryCard from '../../library/find/LibraryCard';
import LibraryCardLoading from '../../library/find/LibraryCardLoading';

const IndexLibraryCard = () => {
    const [lat, long, locationName, locationError, refreshLocation] = useCurrentLocation()
    const [libraries, isLoading] = useLibraryNear(lat, long)

    return (
        <Card>
            <CardBodyContainer>
                <CardTitle
                    icon={<booksitoutIcon.library />}
                    title={'내 근처 도서관'}
                    subTitle={`${locationError || locationName == null ? '내 주변 도서관을 간단히 찾을 수 있어요' : locationName}`}
                    url='/library/near'
                />

                <ReloadButton onClick={refreshLocation} />

                <Row>
                    {
                        isLoading ?
                            Array.from({ length: 8 }).map((_) => {
                                return (
                                    <Col>
                                        <LibraryCardLoading />
                                    </Col>
                                )
                            })
                            :
                            libraries.length === 0 ?
                                <NoContent message={'위치 정보를 허용해 주세요'} />
                                :
                                libraries.slice(0, 8).map((library) => {
                                    return (
                                        <Col>
                                            <LibraryCard library={library} />
                                        </Col>
                                    )
                                })
                    }
                </Row>
            </CardBodyContainer>
        </Card>
    )
}

const Row = styled.div.attrs({
    className: 'row'
})`
`;

const Col = styled.div.attrs({
    className: 'col-12 col-md-6'
})`
`;

export default IndexLibraryCard
import styled from 'styled-components';
import NoContent from '../../../common/NoContent'
import LibraryCard from '../find/LibraryCard'
import LibraryResponse from '../near/LibraryNearResponse'
import { Card } from 'react-bootstrap';
import CardBodyContainer from '../../../common/styles/CardBodyContainer';

interface Props {
    libraries: LibraryResponse[]
}

const LibraryLocationListCard: React.FC<Props> = ({ libraries }) => {
    return (
        <Card>
            <CardBodyContainer>
                <div className="row">
                    {libraries.length === 0 ? (
                        <NoContent message="이 지역에는 도서관이 없어요" />
                    ) : (
                        <Row>
                            {libraries.map(library => {
                                return (
                                    <Col>
                                        <LibraryCard library={library} />
                                    </Col>
                                )
                            })}
                        </Row>
                    )}
                </div>
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

export default LibraryLocationListCard
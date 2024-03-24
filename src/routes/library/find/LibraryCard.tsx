import styled from 'styled-components';
import { Card } from 'react-bootstrap'
import { TbLocationFilled as LocationIcon } from 'react-icons/tb'
import { BsBookHalf as BookIcon } from 'react-icons/bs'
import LibraryTextWithIcon from './LibraryTextWithIcon'
import utils from '../../../common/utils'
import CardBodyBackgroundContainer from '../../../common/styles/CardBodyBackgroundContainer'
import ColSpacer from '../../../common/styles/ColSpacer';
import LibraryResponse from '../near/LibraryNearResponse';
import breakpoints from '../../../config/breakpoints';

interface Props {
    library: LibraryResponse
}

const LibraryCard: React.FC<Props> = ({ library }) => {
    if (library == null || library === undefined) return <></>

    return (
        <a href={`/library/${library.id}`}>
            <Container>
                <CardBodyBackgroundContainer>
                    <Row>
                        <LibraryNameContainer className={library.location.distance !== 0 ? 'col-8' : 'col-12'}>
                            <LibraryImage src={library.location.logo}/>
                            <ColSpacer size={5}/>
                            <LibraryName>{library.name}</LibraryName>
                        </LibraryNameContainer>

                        {library.location.distance !== 0 && (
                            <Col4>
                                <h5 className="text-end text-secondary">
                                    {library.location.distance?.toFixed(2) ?? '-'} km
                                </h5>
                            </Col4>
                        )}
                    </Row>

                    <LibraryInfoContianer>
                        <LibraryTextWithIcon icon={<LocationIcon />} text={library.location.address} />
                        <LibraryTextWithIcon
                            icon={<BookIcon />}
                            text={`${library.bookCount === 0 ? '?' : utils.insertCommas(library.bookCount)} 권` ?? '?'}
                        />
                    </LibraryInfoContianer>
                </CardBodyBackgroundContainer>
            </Container>
        </a>
    )
}

const Container = styled(Card).attrs({
    className: 'mb-3'
})`
    min-height: 125px;
`;

const Row = styled.div.attrs({
    className: 'row'
})`
`;

const Col4 = styled.div.attrs({
    className: 'col-4'
})`
`;

const LibraryNameContainer = styled.div`
    display: flex;
    align-items: center;
`;

const LibraryName = styled.h4.attrs({
    className: 'clamp-1-line'
})`
padding-top: 5px;
`;

const LibraryImage = styled.img.attrs({
    className: 'img-fluid border'
})`
    width: 30px;
    height: 30px;
    border-radius: 50%;
`;

const LibraryInfoContianer = styled.div`
    margin-left: 50px;

    @media screen and (max-width: ${breakpoints.md}){
        margin-left: 25px;
    }
`;

export default LibraryCard
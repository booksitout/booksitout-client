import styled from 'styled-components';
import IndexContentContainer from '../../index/IndexContentContainer';
import RowSpacer from '../../../common/styles/RowSpacer';
import cover from '../../../images/placeholder/default-book-cover-loading.png'
import LoadingBar from '../../../common/LoadingBar';

const BookMineLoadingCard = () => {
    return (
        <Container>
            <IndexContentContainer>
                <ContentContainer>
                    <Cover src={cover} />
                    <RowSpacer size={12.5} />

                    <Title>
                        <LoadingBar size={8} />
                    </Title>

                    <RowSpacer size={2.5} />

                    <Author>
                        <LoadingBar size={4} />
                    </Author>
                </ContentContainer>
            </IndexContentContainer>
        </Container>
    )
}

const Container = styled.div`
    padding-left: 2.5px;
    padding-right: 2.5px;

    height: 300px;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100%;
`;

const Cover = styled.img.attrs({
    className: 'img-fluid rounded'
})`
    max-height: 150px;
    height: auto;
    width: auto;
    max-width: 100%;
    object-fit: contain;
`;

const Title = styled.h1.attrs({
    className: 'clamp-1-line'
})`
    font-size: 15px;
    text-align: center;
`;

const Author = styled.h2.attrs({
    className: 'text-secondary'
})`
    font-size: 13px;
`;

export default BookMineLoadingCard
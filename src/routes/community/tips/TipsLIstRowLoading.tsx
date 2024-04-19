import { Card, Placeholder } from 'react-bootstrap';
import styled from 'styled-components';
import breakpoints from '../../../config/breakpoints';

const TipsLIstRowLoading = () => {
    return (
        <>
            <TipsImage src={''} />

            <TextContainer>
                <Title>
                    <Placeholder as={Card.Text} animation='glow' className='mb-0'>
                        <Placeholder xs={5} />
                    </Placeholder>

                </Title>

                <Summary>
                    <Placeholder as={Card.Text} animation='glow' className='mb-0'>
                        <Placeholder xs={8} />
                    </Placeholder>
                </Summary>
            </TextContainer>
        </>
    )
}

const TipsImage = styled.img`
    width: 100px;
    height: 60px;
    object-fit: cover;
    border-radius: 10px;
    flex-shrink: 0;

    @media screen and (max-width: ${breakpoints.md}) {
        width: 60px;
    }
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: calc(100% - 120px);
    
    @media screen and (max-width: ${breakpoints.md}) {
        width: calc(100% - 70px);
    }
`;

const Title = styled.h5.attrs({
    className: 'clamp-1-line'
})`
`;

const Summary = styled.p.attrs({
    className: 'clamp-1-line text-secondary'
})`
    padding: 0px;
    margin: 0px;
`;


export default TipsLIstRowLoading
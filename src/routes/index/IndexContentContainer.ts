import styled from 'styled-components';

const IndexContentContainer = styled.a.attrs({
    className: 'clickable'
})`
    display: flex;
    flex-direction: row;

    gap: 20px;
    padding: 20px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    height: ${props => props.height}px;
    margin-bottom: 20px;
`;

export default IndexContentContainer
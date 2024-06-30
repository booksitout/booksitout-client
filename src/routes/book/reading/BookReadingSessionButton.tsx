import React, {useCallback} from "react";
import styled from 'styled-components';
import BookResponse from "../BookResponse";
import useReadingSessionStore from './useReadingSessionStore';

interface Props {
    book: BookResponse
}

const BookReadingSessionButton: React.FC<Props> = ({book}) => {
    const {openModal} = useReadingSessionStore()

    let onClick = useCallback((e) => {
        e.preventDefault();
        openModal(book.id);
    }, [openModal, book.id]);
    
    return (
        <Button onClick={onClick}>
            이어서 읽기
        </Button>
    )
}

const Button = styled.button.attrs({
    className: 'btn btn-book'
})`
    margin-top: 10px;
    width: 100%;
    
    max-width: 300px;
`;

export default BookReadingSessionButton

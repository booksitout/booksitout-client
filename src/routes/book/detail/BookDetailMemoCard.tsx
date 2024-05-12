import styled from 'styled-components';
import IndexContentContainer from "../../index/IndexContentContainer"
import BookMemoResponse from "../BookMemoResponse"
import CardAddButton from '../../../common/button/CardAddButton';

interface Props {
    memos: BookMemoResponse[]
}

const BookDetailMemoCard: React.FC<Props> = ({ memos }) => {
    return (
        <IndexContentContainer>
            <CardAddButton onClick={() => alert("Hello World")} />

            <Container>
                {memos.map(memo => (
                    <Memo key={memo.id}>
                        <PageNumber>{memo.page}</PageNumber>
                        <MemoContent>{memo.content}</MemoContent>
                    </Memo>
                ))}
            </Container>
        </IndexContentContainer>
    )
}

const Container = styled.div`
    min-height: 250px;
`;

const Memo = styled.div`
    background-color: #fff9c4;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    margin: 10px 0;
`;

const PageNumber = styled.div`
    font-size: 0.85em;
    font-weight: bold;
    margin-bottom: 5px;
    color: #333;
`;

const MemoContent = styled.div`
    font-size: 1em;
    line-height: 1.5;
    color: #333;
`;

export default BookDetailMemoCard
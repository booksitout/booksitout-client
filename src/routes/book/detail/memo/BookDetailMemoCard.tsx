import styled from 'styled-components';
import IndexContentContainer from "../../../index/IndexContentContainer"
import BookMemoResponse from "../../BookMemoResponse"
import CardAddButton from '../../../../common/button/CardAddButton';
import BookDetailMemoAddModal from './BookDetailMemoAddModal';
import { useState } from 'react';
import BookDetailMemoDetailModal from './BookDetailMemoDetailModal';
import ColorConfig from '../../../../config/ColorConfig';

interface Props {
    memos: BookMemoResponse[]
}

const BookDetailMemoCard: React.FC<Props> = ({ memos }) => {
    const [isAddOpen, setIsAddOpen] = useState<boolean>(false)
    const openAdd = () => setIsAddOpen(true)
    const closeAdd = () => setIsAddOpen(false)

    const [isDetailOpen, setIsDetailOpen] = useState<boolean>(false)
    const [detailMemo, setDetailMemo] = useState<BookMemoResponse | null>(null)
    const openDetail = (memo) => {
        setIsDetailOpen(true)
        setDetailMemo(memo)
    }
    const closeDetail = () => {
        setIsDetailOpen(false)
        setDetailMemo(null)
    }

    return (
        <IndexContentContainer>
            <BookDetailMemoAddModal isOpen={isAddOpen} close={closeAdd} />
            {detailMemo != null && 
                <BookDetailMemoDetailModal
                    isOpen={isDetailOpen}
                    close={closeDetail}
                    memo={detailMemo}
                />
            }

            <CardAddButton onClick={openAdd} />

            <Container>
                {memos.length === 0 ?
                    <EmptyCase />
                    :
                    memos.map(memo => (
                        <Memo key={memo.id} onClick={() => openDetail(memo)}>
                            <PageNumber>{memo.page ?? '-'}</PageNumber>
                            <MemoContent>{memo.content}</MemoContent>
                        </Memo>
                    ))}
            </Container>
        </IndexContentContainer>
    )
}

const EmptyCase = () => {
    return (
        <EmptyCaseContainer>
            <EmptyCaseText>✏️ 추가하신 메모가 없어요!</EmptyCaseText>
        </EmptyCaseContainer>
    )
}

const EmptyCaseContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    color: black;
`;

const EmptyCaseText = styled.h3`
    text-align: center;
`;

const Container = styled.div.attrs({
    className: 'row row-eq-height'
})`
    min-height: 250px;
    width: 100%;
`;

const Memo = styled.div.attrs({
    className: 'col-12 col-md-6 col-xl-4'
})`
    background-color: #fff9c4;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    margin: 10px 0;

    min-height: 60px;
`;

const PageNumber = styled.div`
    font-size: 0.85em;
    font-weight: bold;
    margin-bottom: 5px;
    color: ${ColorConfig.Primary};
`;

const MemoContent = styled.div.attrs({
    className: 'clamp-1-line'
})`
    font-size: 1em;
    line-height: 1.5;
    color: #333;
`;

export default BookDetailMemoCard
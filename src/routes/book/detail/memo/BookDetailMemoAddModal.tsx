import styled from 'styled-components';
import { Form, Modal } from 'react-bootstrap'
import RowSpacer from '../../../../common/styles/RowSpacer';
import AddButton from '../../../../common/button/AddButton';
import { booksitoutServer } from '../../../../config/booksitoutServer';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';

interface Props {
    isOpen: boolean
    close: () => void
}

const BookDetailMemoAddModal: React.FC<Props> = ({ isOpen, close }) => {
    const { bookId } = useParams()

    const [page, setPage] = useState<number | null>(null)
    const [content, setContent] = useState<string>('')

    const addMemo = () => {
        if (content === '')  {
            toast.error('메모 내용을 입력해주세요.')
            return
        }

        const data = {
            page: page,
            content: content
        }

        booksitoutServer
            .post(`/v1/book/${bookId}/memo`, data)
            .then(() => {
                toast.success('메모를 추가했어요.')
                close()
                window.location.reload()
            })
            .catch(() => toast.error('오류가 났어요. 잠시 후 다시 시도해 주세요.'))
    }

    return (
        <Modal show={isOpen} onHide={close} centered fullscreen='md-down' backdrop='static'>
            <Modal.Header closeButton>
                <Title>✏️ 메모 추가하기</Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Control 
                            type="number" 
                            placeholder="페이지 번호" 
                            onChange={(e) => setPage(Number(e.target.value))}
                        />
                    </Form.Group>

                    <RowSpacer size={10} />

                    <Form.Group>
                        <Form.Control 
                            as="textarea" 
                            placeholder="메모 내용" 
                            style={{ height: '200px' }} 
                            onChange={(e) => setContent(String(e.target.value))}
                        />
                    </Form.Group>

                    <RowSpacer size={10} />

                    <AddButton label={'추가하기'} onClick={addMemo} />
                </Form>
            </Modal.Body>
        </Modal>
    )
}

const Title = styled.h2`
    text-align: center;
`;

export default BookDetailMemoAddModal
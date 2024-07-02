import styled from 'styled-components';
import React from 'react'
import Modal from "../../../../common/Modal";
import SearchBookResponse from '../../../search/book/SearchBookResponse';
import {Button, Form} from "react-bootstrap";
import {BookForm, BookLanguage, BookSource} from '../../BookType';
import {BooksitoutServer} from "../../../../config/BooksitoutServer";
import toast from "react-hot-toast";
import {useNavigate} from 'react-router-dom';
import RowSpacer from "../../../../common/styles/RowSpacer";
import utils from '../../../../common/utils';
import NumberInput from "../../../../common/form/NumberInput";

interface Props {
    isAddModalOpen: boolean
    onClose: () => void
    selectedBook: SearchBookResponse | null
}

const AddBookSearchModal: React.FC<Props> = ({isAddModalOpen, onClose, selectedBook}) => {
    return (
        <Modal
            isShowing={isAddModalOpen}
            onClose={onClose}
            titleText={'내 서재에 책 추가하기'}
            isPreventClose={true}
            size={'lg'}
            body={
                <Container>
                    {selectedBook != null && <AddBookSearchModalBody book={selectedBook}/>}
                </Container>
            }
        />
    )
}

interface BookAddRequest {
    isbn13: string | null
    title: string | null
    author: string | null
    cover: string | null
    page: number | null

    source: BookSource
    form: BookForm
    language: BookLanguage
}

interface PropsBody {
    book: SearchBookResponse
}

const AddBookSearchModalBody: React.FC<PropsBody> = ({book}) => {
    const navigate = useNavigate()

    const [title, setTitle] = React.useState<string>(book.title)
    const [author, setAuthor] = React.useState<string>(book.authors)
    const [cover, setCover] = React.useState<string>(book.cover)
    const [page, setPage] = React.useState<string | null>(book.page?.toString() ?? null)
    const [source, setSource] = React.useState<BookSource>('BUY_NEW_OFFLINE')
    const [form, setForm] = React.useState<BookForm>('PHYSICAL')
    const [language, setLanguage] = React.useState<BookLanguage>('KOREAN')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (page == null || !utils.isNumber(page)) {
            toast.error('페이지 수를 입력해주세요.')
            return
        }

        const request: BookAddRequest = {
            isbn13: book.isbn13,
            title: title,
            author: author,
            cover: cover,
            page: parseInt(page),
            source: source,
            form: form,
            language: language,
        };

        BooksitoutServer
            .post(`/v1/book`, request)
            .then((res) => {
                toast.success('책을 추가했어요.')
                navigate(`/book/mine/${res.data.book.id}`)
            })
            .catch(() => toast.error('책을 추가할 수 없었어요. 잠시 후 다시 시도해주세요.'))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col2>
                    <Form.Control
                        type="text"
                        placeholder="제목"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Col2>
                <Col2>
                    <Form.Control
                        type="text"
                        placeholder="저자"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </Col2>
                <RowSpacer/>

                <Col4>
                    <Form.Select value={language} onChange={(e) => setLanguage(e.target.value as BookLanguage)}>
                        <option value="KOREAN">🇰🇷 한국어</option>
                        <option value="ENGLISH">🇺🇸 영어</option>
                        <option value="JAPANESE">🇯🇵 일본어</option>
                        <option value="CHINESE">🇨🇳 중국어</option>
                        <option value="FRENCH">🇫🇷 프랑스어</option>
                        <option value="SPANISH">🇪🇸 스페인어</option>
                        <option value="GERMAN">🇩🇪 독일어</option>
                        <option value="RUSSIAN">🇷🇺 러시아어</option>
                        <option value="ITALIAN">🇮🇹 이탈리아어</option>
                        <option value="OTHERS">기타</option>
                    </Form.Select>
                </Col4>
                <Col4>
                    <Form.Select value={form} onChange={(e) => setForm(e.target.value as BookForm)}>
                        <option value="PHYSICAL">📃 종이</option>
                        <option value="ELECTRONIC">🔌 전자</option>
                        <option value="AUDIO">👂 오디오</option>
                    </Form.Select>
                </Col4>
                <Col4>
                    <Form.Select value={source} onChange={(e) => setSource(e.target.value as BookSource)}>
                        <option value="BUY_NEW_OFFLINE">새 책 구입 (오프라인)</option>
                        <option value="BUY_NEW_ONLINE">새 책 구입 (온라인)</option>
                        <option value="BUY_USED_OFFLINE">중고 책 구입 (오프라인)</option>
                        <option value="BUY_USED_ONLINE">중고 책 구입 (온라인)</option>
                        <option value="LIBRARY">도서관</option>
                        <option value="BORROW_STORE">대여(서점)</option>
                        <option value="BORROW_FRIENDS">대여(친구)</option>
                        <option value="SUBSCRIPTION">구독</option>
                        <option value="OTHERS">기타</option>
                    </Form.Select>
                </Col4>
                <RowSpacer/>

                <Col4>
                    <NumberInput
                        placeholder="페이지 수"
                        value={page?.toString()}
                        onChange={(e) => setPage(e.target.value)}
                    />
                </Col4>
                <RowSpacer/>

                <Col2>
                    <Button variant={'book'} type={'submit'} className={'w-100'}>추가하기</Button>
                </Col2>
            </Row>
        </Form>
    )
}

const Container = styled.div`
    min-height: 250px
`

const Row = styled.div.attrs({
    className: 'row'
})`
    justify-content: center;
`

const Col2 = styled.div.attrs({
    className: 'col-12 col-md-6'
})``

const Col4 = styled.div.attrs({
    className: 'col-12 col-md-4'
})``

export default AddBookSearchModal

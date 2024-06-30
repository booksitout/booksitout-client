import ApiUrls from "../../../../ApiUrls";
import styled from 'styled-components';
import SearchBar from "../../../search/searchbar/SearchBar";
import {useEffect, useState} from "react";
import {BooksitoutServer} from "../../../../config/BooksitoutServer";
import SearchBookResponse from "../../../search/book/SearchBookResponse";
import toast from "react-hot-toast";
import SearchBookCard from "../../../search/book/SearchBookCard";
import RowSpacer from "../../../../common/styles/RowSpacer";
import AddBookSearchModal from "./AddBookSearchModal";

const AddBookSearchRoute = () => {
    const [query, setQuery] = useState<string>("")
    const [books, setBooks] = useState<SearchBookResponse[]>([])

    const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false)
    const [selectedBook, setSelectedBook] = useState<SearchBookResponse | null>(null)

    useEffect(() => {
        if (query !== '') {
            BooksitoutServer
                .get(ApiUrls.Search.Book.GET(query))
                .then((res) => res.data)
                .then((data: SearchBookResponse[]) => setBooks(data))
                .catch(() => toast.error('오류가 났어요. 잠시 후 다시 시도해 주세요.'))
        }
    }, [query])

    return (
        <div>
            <AddBookSearchModal
                isAddModalOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                selectedBook={selectedBook}
            />

            <Center>
                <SearchBarContainer>
                    <SearchBar
                        placeholder={"추가할 책을 검색해 주세요"}
                        query={query}
                        queryHistories={[]}
                        querySuggestions={[]}
                        isShowingQueryHistory={false}
                        isShowingAutoComplete={false}
                        setQuery={(q) => setQuery(q)}
                        setIsShowingQueryHistory={(b) => {
                        }}
                        handleSubmit={(e) => e.preventDefault()}
                    />
                </SearchBarContainer>
            </Center>

            <RowSpacer/>

            <Row>
                {
                    books
                        .map((book) => (
                            <Col onClick={() => {

                            }}>
                                <SearchBookCard
                                    book={book}
                                    onClick={() => {
                                        setIsAddModalOpen(true)
                                        setSelectedBook(book)
                                    }}
                                />
                                <RowSpacer/>
                            </Col>
                        ))
                }
            </Row>
        </div>
    )
}

const Center = styled.div`
    display: flex;
    justify-content: center;
`

const SearchBarContainer = styled.div`
    width: 50%;
`;

const Row = styled.div.attrs({
    className: 'row'
})`
`

const Col = styled.div.attrs({
    className: 'col-6 col-md-3 col-xl-2'
})`
`

export default AddBookSearchRoute
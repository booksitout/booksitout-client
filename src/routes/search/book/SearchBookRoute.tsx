import styled from 'styled-components';
import RouteContainer from "../../../common/styles/RouteContainer"
import RowSpacer from "../../../common/styles/RowSpacer"
import SearchBar from "../searchbar/SearchBar"
import breakpoints from '../../../config/breakpoints';
import useSearchQuery from '../../../common/hooks/useSearchQuery';
import useUrlQuery from '../../../common/hooks/useUrlQuery';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { booksitoutServer } from '../../../config/axios';
import ApiUrls from '../../../ApiUrls';
import toast from 'react-hot-toast';
import SearchBookResponse from './SearchBookResponse';
import SearchBookCard from './SearchBookCard';

const SearchBookRoute = () => {
    const [query, setQuery, dQuery] = useSearchQuery()
    const [books, setBooks] = useState<SearchBookResponse[]>([])

    const defaultQuery = useUrlQuery('q')
    useEffect(() => {
        (setQuery as Dispatch<SetStateAction<string>>)(defaultQuery ?? '')
    }, [defaultQuery, setQuery])

    useEffect(() => {
        if (dQuery !== '') {
            booksitoutServer
                .get(ApiUrls.Search.Book.GET(dQuery.toString()))
                .then((res) => res.data)
                .then((data: SearchBookResponse[]) => setBooks(data))
                .catch(() => toast.error('오류가 났어요. 잠시 후 다시 시도해 주세요.'))
        }
    }, [dQuery])

    return (
        <RouteContainer>
            <RowSpacer />

            <SearchContainer>
                <SearchContainerContainer>
                    <SearchBar />
                </SearchContainerContainer>
            </SearchContainer>
            <RowSpacer size={20} />

            <Row>
                {
                    books.map((book) => {
                        return (
                            <Col>
                                <SearchBookCard book={book} />
                                <RowSpacer />
                            </Col>
                        )
                    })
                }
            </Row>
        </RouteContainer>
    )
}

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const SearchContainerContainer = styled.div`
    width: 50%;
    
    @media screen and (max-width: ${breakpoints.md}){
        width: 100%;
    }
`;

const Row = styled.div.attrs({
    className: 'row'
})``;

const Col = styled.div.attrs({
    className: 'col-6 col-md-4 col-lg-3 col-xl-2'
})``;

export default SearchBookRoute
import React from 'react'
import styled from 'styled-components';
import { Card } from 'react-bootstrap'
import CardTitle from '../../../common/styles/CardTitle'
import booksitoutIcon from '../../../config/booksitoutIcon'
import CardBodyContentContainer from '../../../common/styles/CardBodyContentContainer'
import useLibraryByBookCount from '../useLibraryByBookCount'
import LibraryCardLoading from './LibraryCardLoading'
import LibraryCard from './LibraryCard'

const LibraryByBookCountCard = () => {
    const [libraries, isLoading] = useLibraryByBookCount()

    return (
        <Card>
            <CardBodyContentContainer height={600}>
                <CardTitle icon={<booksitoutIcon.popular />} title={'책 많은 도서관 순위'} url={''} />

                {
                    isLoading
                        ?
                        <Row>
                            {
                                Array.from({length: 8}).map(() => {
                                    return (
                                        <Col>
                                            <LibraryCardLoading />
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                        :
                        <Row>
                            {

                                libraries.map((library) => {
                                    return (
                                        <Col>
                                            <LibraryCard library={library} />
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                }
            </CardBodyContentContainer>
        </Card>
    )
}

const Row = styled.div.attrs({
    className: 'row'
})`
`;

const Col = styled.div.attrs({
    className: 'col-12 col-md-6'
})`
`;

export default LibraryByBookCountCard
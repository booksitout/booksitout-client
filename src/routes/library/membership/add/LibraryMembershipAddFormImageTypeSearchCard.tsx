import { useEffect, useState } from 'react'
import { Card, ListGroup, Form } from 'react-bootstrap'
import NoContent from '../../../../common/NoContent'
import Error from '../../../../common/Error';
import { BooksitoutServer } from '../../../../config/BooksitoutServer';
import { useDebounce } from '../../../../common/hooks/useDebounce';
import LibraryMembershipTypeSearchResult from '../LibraryMembershipTypeSearchResult';
import LibraryMembershipTypeResponse from '../LibraryMembershipTypeResponse';
import LoadingBar from '../../../../common/LoadingBar';

const LibraryMembershipAddFormImageTypeSearchCard = ({ recognizedMembership, selectType }) => {
    const [loading, setLoading] = useState(false)

    const [searchResult, setSearchResult] = useState<LibraryMembershipTypeResponse[]>(
        recognizedMembership.typeId != null
            ? [
                {
                    id: recognizedMembership.typeId,
                    name: recognizedMembership.name,
                    logo: recognizedMembership.logo,
                    description: '',
                },
            ]
            : [],
    )

    const [query, setQuery] = useState<string>(recognizedMembership?.name ?? '')
    const [debouncedQuery, cancelDebounce] = useDebounce(query, 500)
    useEffect(() => {
        if (debouncedQuery === '') {
            cancelDebounce()
        } else {
            BooksitoutServer
                .get(`/v1/library/membership/type?q=${query}&size=6`)
                .then(res => setSearchResult(res.data))
                .finally(() => setLoading(false))
        }
    }, [debouncedQuery])

    useEffect(() => {
        setLoading(query !== '')
    }, [query])

    return (
        <>
            <Form.Control
                placeholder="회원증 종류를 검색해서 선택해 주세요 "
                defaultValue={recognizedMembership?.name ?? ''}
                onChange={e => setQuery(e.target.value)}
            />
            <Card style={{ minHeight: '230px' }} className="mt-3">
                <Card.Body>
                    <ListGroup>
                        {loading ? (
                            <div className="row">
                                {Array.from({ length: 6 }).map(() => {
                                    return (
                                        <div className="col-6 p-0 mt-1">
                                            <RegionSearchResultLoading />
                                        </div>
                                    )
                                })}
                            </div>
                        ) : searchResult == null ? (
                            <NoContent message="검색어를 입력해 주세요" />
                        ) : searchResult === undefined ? (
                            <Error />
                        ) : searchResult.length === 0 ? (
                            <NoContent message="검색 결과가 없어요" />
                        ) : (
                            <div className="row">
                                {searchResult.map(type => {
                                    return (
                                        <div className="col-6 p-0 mt-1" onClick={() => selectType(type.id)}>
                                            <LibraryMembershipTypeSearchResult
                                                type={type}
                                                selected={recognizedMembership.typeId}
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        )}
                    </ListGroup>
                </Card.Body>
            </Card>
        </>
    )
}

const RegionSearchResultLoading = () => {
    return (
        <ListGroup.Item style={{ height: '60px' }} className='rounded'>
            <LoadingBar size={5} />
        </ListGroup.Item>
    )
}

export default LibraryMembershipAddFormImageTypeSearchCard
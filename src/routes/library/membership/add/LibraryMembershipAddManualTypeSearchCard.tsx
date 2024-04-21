import React from 'react'
import { useDebounce } from '../../../../common/hooks/useDebounce'
import LibraryMembershipTypeResponse from '../LibraryMembershipTypeResponse'
import { booksitoutServer } from '../../../../config/booksitoutServer'
import { Card, Form, ListGroup } from 'react-bootstrap'
import NoContent from '../../../../common/NoContent'
import Error from '../../../../common/Error';
import LibraryMembershipTypeSearchResult from '../LibraryMembershipTypeSearchResult'
import LoadingBar from '../../../../common/LoadingBar'

const LibraryMembershipAddManualTypeSearchCard = ({ typeId, setTypeId }) => {
    const [loading, setLoading] = React.useState(false)

    const [searchResult, setSearchResult] = React.useState<LibraryMembershipTypeResponse[]>([])
    const [query, setQuery] = React.useState<string>('')
    const [debouncedQuery, cancelDebounce] = useDebounce(query, 500)
    React.useEffect(() => {
        if (debouncedQuery === '') {
            setSearchResult([])
            cancelDebounce()
        } else {
            booksitoutServer
                .get(`/v1/library/membership/type?q=${query}&size=6`)
                .then((res) => setSearchResult(res.data))
                .finally(() => setLoading(false))
        }
    }, [debouncedQuery])

    React.useEffect(() => {
        setLoading(query !== '')
    }, [query])

    return (
        <>
            <Form.Control placeholder='회원증 종류를 검색해서 선택해 주세요 ' onChange={(e) => setQuery(e.target.value)} />
            <Card style={{ minHeight: '230px' }} className='mt-3'>
                <Card.Body>
                    <ListGroup>
                        {loading ? (
                            <div className='row'>
                                {Array.from({ length: 6 }).map(() => {
                                    return (
                                        <div className='col-6 p-0 mt-1'>
                                            <RegionSearchResultLoading />
                                        </div>
                                    )
                                })}
                            </div>
                        ) : searchResult == null ? (
                            <NoContent message='검색어를 입력해 주세요' />
                        ) : searchResult === undefined ? (
                            <Error />
                        ) : searchResult.length === 0 ? (
                            <NoContent message='검색 결과가 없어요' />
                        ) : (
                            <div className='row'>
                                {searchResult.map((type) => {
                                    return (
                                        <div className='col-6 p-0 mt-1' onClick={() => setTypeId(type.id)}>
                                            <LibraryMembershipTypeSearchResult type={type} selected={typeId} />
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
            <LoadingBar size={5}/>
		</ListGroup.Item>
	)
}

export default LibraryMembershipAddManualTypeSearchCard
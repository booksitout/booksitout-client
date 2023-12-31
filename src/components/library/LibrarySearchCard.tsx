import React from 'react'
import { Card, Form, ListGroup } from 'react-bootstrap'
import { booksitoutServer } from '../../config/axios'
import { LibraryAutoCompleteType } from './LibraryType'
import { useDebounce } from '../common/useDebounce'
import LibrarySearchPlaceholder from './LibrarySearchPlaceholder'
import NoContent from '../common/NoContent'
import booksitoutIcon from '../common/icons/booksitoutIcon';
import CardTitle from '../common/CardTitle'

const LibrarySearchCard = () => {
	const [query, setQuery] = React.useState<string>('')
	const [debouncedQuery, cancelDebounce] = useDebounce(query, 500)
	const [loading, setLoading] = React.useState<boolean>(false)

	const [libraryList, setLibraryList] = React.useState<LibraryAutoCompleteType[]>([])
	React.useEffect(() => {
		if (debouncedQuery === '') {
			setLibraryList([])
			cancelDebounce()
		} else {
			booksitoutServer
				.get(`v5/library/available-library/auto-complete?query=${debouncedQuery}&size=5`)
				.then((res) => setLibraryList(res.data))
				.finally(() => setLoading(false))
		}
	}, [debouncedQuery])

	React.useEffect(() => {
		setLoading(true)
	}, [query])

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	return (
		<Card style={{ minHeight: '500px' }}>
			<Card.Body>
				<CardTitle icon={<booksitoutIcon.search />} title={'도서관 검색하기'} />

				<Form className="mt-3" onSubmit={handleSubmit}>
					<div className="row justify-content-center">
						<div>
							<Form.Control
								type="text"
								placeholder="도서관 이름 / 주소"
								onChange={e => setQuery(String(e.target.value))}
								autoComplete="off"
								autoCorrect="off"
								autoCapitalize="off"
							/>
						</div>
					</div>
				</Form>

				<div className="mt-3" />

				<ListGroup>
					{loading && query !== '' ? (
						[1, 2, 3, 4, 5].map(() => {
							return <LibrarySearchPlaceholder />
						})
					) : libraryList.length === 0 ? (
						<NoContent
							message={query === '' ? '검색어를 입력해 주세요' : '도서관이 없어요'}
							move={0}
							mt={100}
						/>
					) : (
						libraryList.map(library => {
							return (
								<a href={`/library/detail/${library.id}`}>
									<ListGroup.Item className="text-center rounded">
										{library.name}
										<div className="text-secondary clamp-1-line">{library.address}</div>
									</ListGroup.Item>
								</a>
							)
						})
					)}
				</ListGroup>
			</Card.Body>
		</Card>
	)
}

export default LibrarySearchCard
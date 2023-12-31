import React from "react"
import { Card, ListGroup } from "react-bootstrap"
import { PopularBookType } from "../post/PostType"
import Error from '../../common/Error'
import booksitoutIcon from '../../common/icons/booksitoutIcon';
import { booksitoutServer } from "../../../config/axios"
import PopularBookListLoading from "./CommunityRoutePopularBookListLoading";
import styled from 'styled-components';
import CardTitle from "../../common/CardTitle";
import { useMinLoading } from "../../common/useMinLoading";

const CommunityRoutePopularBookCard = () => {
	const [popularBook, loading, error] = useMinLoading<PopularBookType[]>(() =>
		booksitoutServer.get(`/v4/forum/ranking`).then(res => res.data),
	)

    return (
		<PopularBookCard>
			<Card.Body>
				<CardTitle icon={<booksitoutIcon.book />} title={'인기 책'} />

				<ListGroup className="h-100">
					{loading ? (
						<PopularBookListLoading />
					) : error || popularBook == null || popularBook === undefined ? (
						<Error />
					) : (
						typeof popularBook != 'boolean' &&
						popularBook.map(book => {
							return (
								<ListGroup.Item>
									<a href={`/book/info/${book.isbn}`}>
										<div className="row">
											<div className="col-1 col-md-2 col-lg-1 p-0 ps-2">
												<b className="force-1-line text-book">{book.id}</b>
											</div>

											<div className="col-11 col-md-10 col-lg-10 m-0 p-0 ps-3 ps-md-0">
												<p className="m-0 clamp-1-line">{book.title}</p>

												<p className="text-secondary m-0 force-1-line">
													{book.author.substring(0, 10)}{' '}
													{book.author.length > 10 ? '...' : ''}
												</p>
											</div>
										</div>
									</a>
								</ListGroup.Item>
							)
						})
					)}
				</ListGroup>
			</Card.Body>
		</PopularBookCard>
	)
}

const PopularBookCard = styled(Card)`
	height: 100%;
	min-height: 750px;
	max-height: 750px;
`;

export default CommunityRoutePopularBookCard
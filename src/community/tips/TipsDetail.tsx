import React from "react"
import { Card } from "react-bootstrap"
import { useParams } from "react-router-dom"
import parse from 'html-react-parser'
import Tip from "./TipsType"
import TipsTimeIcon from "./TipsTimeIcon"
import Loading from "../../common/Loading"
import Error from '../../common/Error'
import { booksitoutServer } from "../../functions/axios"
import styled from 'styled-components';

const TipsDetail = () => {
    const { id } = useParams()

    const [initialFetch, setInitialFetch] = React.useState(true)
	const [loading, setLoading] = React.useState(true)
	const [error, setError] = React.useState(false)

    const [tip, setTip] = React.useState<Tip | null>(null)
    React.useEffect(() => {
        booksitoutServer
			.get(`/v4/forum/tips/${id}`)
			.then((res) => setTip(res.data))
			.catch(() => setError(true))
			.finally(() => {
				setInitialFetch(false)
				setLoading(false)
			})
    }, [])

    if (initialFetch) return <></>
    if (loading) return <Loading/>
    if (error) return <Error />

    return (
		<TipsDetailContainer>
			<Card style={{ minHeight: '200px' }} className='mb-4'>
				<Card.Body>
					<div className='row'>
						<div className='col-12 col-md-10'>
							<h2>{tip?.title}</h2>
						</div>

						<div className='col-12 col-md-2'>
							<TipsTimeIcon time={tip?.estimatedReadTime} size='h4' />

							<h6 className='text-end text-secondary'>{`
                            ${tip?.createdDate?.split('-')[0].slice(2)}년 
                            ${tip?.createdDate?.split('-')[1]}월`}</h6>
						</div>
					</div>

					<p className='text-secondary'>{tip?.summary}</p>
				</Card.Body>
			</Card>

			<Card style={{ minHeight: '500px' }} className="mb-5">
				<Card.Body>
					<p>{parse(tip?.content ?? '')}</p>
				</Card.Body>
			</Card>
		</TipsDetailContainer>
	)
}

const TipsDetailContainer = styled.div.attrs({
	className: 'container-xl'
})`
	b {
		background-color: #ECECEA;
		color: #CE5858;
		padding: 2.5px;
	}

	.title {
		margin-top: 20px;
		text-align: center;
	}

	.content {
		
	}

	hr {
		margin-bottom: 50px;
	}
`;

export default TipsDetail
import React from "react"
import { Card } from "react-bootstrap"
import { useParams } from "react-router-dom"
import parse from 'html-react-parser'
import Tip from "../../../types/TipsType"
import TipsTimeIcon from "./TipsTimeIcon"
import Loading from "../../common/Loading"
import Error from '../../common/Error'
import { booksitoutServer } from "../../../config/axios"
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
				<TitleContainer>
					<div className='row'>
						<div className='col-12 col-md-10 mb-2'>
							<ImageContainer>
								<Image src={tip?.displayImageUrl} alt='' />
							</ImageContainer>

							<h2 className="mt-5">{tip?.title}</h2>
						</div>

						<div className='col-12 col-md-2 pt-2'>
							<TipsTimeIcon time={tip?.estimatedReadTime} size='h4' />

							<h6 className='text-end text-secondary'>{`
                            ${tip?.createdDate?.split('-')[0].slice(2)}년 
                            ${tip?.createdDate?.split('-')[1]}월`}</h6>
						</div>
					</div>

					<p className='text-secondary'>{tip?.summary}</p>
				</TitleContainer>
			</Card>

			<Card style={{ minHeight: '500px' }} className="mb-5">
				<ContentContainer>
					<p>{parse(tip?.content ?? '')}</p>
				</ContentContainer>
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

const TitleContainer = styled(Card.Body)`
	padding-top: 50px;
	padding-left: 100px;
	padding-right: 100px;

	font-family: 'Nanum Gothic', sans-serif;
`;

const ContentContainer = styled(Card.Body)`
	padding-top: 50px;
	padding-left: 100px;
	padding-right: 100px;

	font-size: 1.1rem;
	font-family: 'Nanum Gothic', sans-serif;
`;

const ImageContainer = styled.div`
	width: 100%; 
	height: 0; 
	padding-top: 56.25%; 
	position: relative; 
`;

const Image = styled.img.attrs({
	className: 'img-fluid rounded'
})`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: auto;
`;

export default TipsDetail
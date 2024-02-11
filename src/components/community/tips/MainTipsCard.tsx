import React from "react"
import { Card } from "react-bootstrap"
import Error from '../../common/Error'
import TipsType from "../../../types/TipsType"
import AllButton from "../../common/AllButton"
import logo from '../../../images/logo.png'
import { booksitoutServer } from "../../../config/axios"
import CardTitle from "../../common/CardTitle"
import MainTipsListGroupLoading from "./MainTipsListGroupLoading"
import styled from 'styled-components';
import breakpoints from "../../common/breakpoints"
import TipsCard from "./TipsCard"

const MainTipsCard = () => {
	const [initialFetch, setInitialFetch] = React.useState(true)
	const [loading, setLoading] = React.useState(true)
	
    const [tipPost, setTipPost] = React.useState<TipsType[] | null>(null)
	React.useEffect(() => {
		booksitoutServer
			.get(`/v4/forum/tips?type=all&size=6`)
			.then(res => setTipPost(res.data.content))
			.finally(() => {
				setInitialFetch(false)
				setLoading(false)
			})
	}, [])

	return (
		<TipsContainer href="/tips/all">
			<TipsCardContainer>
				<Card.Body>
					<CardTitle 
						title="책잇아웃의 꿀팁"
						icon={<img src={logo} alt="" className="img-fluid rounded me-2 mt-0 mt-md-1" style={{ width: '40px', height: '40px' }}/>} 
					/>

					{initialFetch ? (
						<></>
					) : tipPost == null ? (
						<Error />
					) : loading || tipPost === null ? (
						<MainTipsListGroupLoading />
					) : (
						<div className="row">
							{
								tipPost.map((tip) => <TipsCard tip={tip} />)
							}
						</div>
					)}
					<div className="d-inline-block pb-4" />

					<AllButton url="tips/all" />
				</Card.Body>
			</TipsCardContainer>
		</TipsContainer>
	)
}

const TipsContainer = styled.a.attrs({
	className: '',
})`
	color: black;
`

const TipsCardContainer = styled(Card).attrs({
	className: ``,
})`
	height: 100%;
	min-height: 650px;
	
	@media screen and (min-width: ${breakpoints.md}) {
		min-height: 480px;
	}
`

export default MainTipsCard
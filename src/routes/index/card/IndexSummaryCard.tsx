import styled from 'styled-components';
import { Card } from 'react-bootstrap'
import CardBodyContainer from '../../../common/styles/CardBodyContainer'
import CardTitle from '../../../common/styles/CardTitle'
import booksitoutIcon from '../../../config/booksitoutIcon'
import OAuthConfig from '../../../config/OAuthConfig';
import RowSpacer from '../../../common/styles/RowSpacer';
import loginImage from '../../../images/relax.svg'
import ColorConfig from '../../../config/ColorConfig';
import useLoginStore from '../../login/useLoginStore';
import BookStatisticsTable from '../../book/statitics/BookStatisticsTable';
import IndexContentContainer from '../IndexContentContainer';
import BookGoalCard from '../../book/goal/BookGoalCard';
import BookLastReadCard from '../../book/BookLastReadCard';

const IndexSummaryCard = () => {
    const isLoggedIn = useLoginStore((state) => state.isLoggedIn())

    return (
        <Card>
            <CardBodyContainer>
                <CardTitle 
                    icon={<booksitoutIcon.user />} 
                    title={'내 독서활동 요약'} 
                    url='/book/summary'
                />

                {isLoggedIn ? <YesLoggedInCase /> : <NoLoggedInCase />}
            </CardBodyContainer>
        </Card>
    )
}

const NoLoggedInCase = () => {
    return (
        <NoLoginContainer>
            <Title>3초만에 로그인해 이용하기</Title>

            <RowSpacer />

            <OAuthContainer>
                {OAuthConfig.map(oauth => {
						return (
							<a href={oauth.redirectUrl} style={{ pointerEvents: !oauth.active ? 'none' : 'auto' }}>
                                <OAuthButton src={oauth.image} alt="" active={oauth.active}/>
							</a>
						)
					})}
            </OAuthContainer>

            <RowSpacer />

            <ImageContainer>
                <Image src={loginImage} alt="login" />
            </ImageContainer>
        </NoLoginContainer>
    )
}

const YesLoggedInCase = () => {
    return (
        <Row>
            <Col>
                <IndexContentContainer height={175}>
                    <BookLastReadCard />
                </IndexContentContainer>

                <IndexContentContainer href='/book/goal'>
                    <BookGoalCard />
                </IndexContentContainer>
            </Col>

            <Col>
                <IndexContentContainer href='/book/statistics'>
                    <BookStatisticsTable year={new Date().getFullYear()} />
                </IndexContentContainer>
            </Col>
        </Row>
    )
}

const Row = styled.div.attrs({
    className: 'row'
})`
`;

const Col = styled.div.attrs({
    className: 'col-12 col-md-6 col-xl-4'
})`
`;

const NoLoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const Title = styled.h1`
	color: ${ColorConfig.PrimaryDark};
	font-size: 35px;
	font-weight: 700;
	padding-top: 2.5px;
`;

const OAuthContainer = styled.div`
    text-align: center;
`;

const OAuthButton = styled.img.attrs((props) => ({
    className: `img-fluid ms-2 me-2 ms-md-3 me-md-3 rounded ${(!props.active && 'opacity-50')}`
}))`
    width: 50px;
`;

const ImageContainer = styled.div`
	min-height: 300px;
	justify-content: center;
	text-align: center;
`

const Image = styled.img.attrs({
	className: '',
})`
	height: 100%;
	width: 100%;
`

export default IndexSummaryCard
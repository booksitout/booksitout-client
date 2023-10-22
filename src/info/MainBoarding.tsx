import styled from 'styled-components';
import breakpoints from '../common/breakpoints';
// import boardingImage from './onboarding.svg'
import boardingImage from './everyonesgarden.svg'

const MainBoarding = () => {
	return (
		<Container>
			<Content>
				<Head>
					독서생활,
					<br />
					이제는 더 간편하게
				</Head>

				<SubHead>
					나만의 디지털 서재를 만들어, 내 독서활동을 관리해요.
					<br />
					여러 곳에 흩어져 있는 책을 한 번에 검색해요.
					<br />
				</SubHead>
			</Content>

			<Image src={boardingImage} />
		</Container>
	)
}

const Container = styled.section.attrs({
	className: 'rounded',
})`
	font-family: Arial;

	height: 500px;
	padding: 25px;

	display: flex;
	align-items: center;

	/* background-color: #d1e7de; */
	/* color: #0a3622; */
	overflow: hidden;

	@media screen and (min-width: ${breakpoints.md}) {
		padding: 100px;
	}

	@media screen and (min-width: ${breakpoints.xl}) {
		padding: 200px;
	}
`

const Content = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`

const Head = styled.h1.attrs({
	className: '',
})`
`

const SubHead = styled.h6.attrs({
	className: '',
})``

const Image = styled.img.attrs({
	className: 'img-fluid',
})`
	max-width: 300px;
	
	@media screen and (min-width: ${breakpoints.md}) {
		max-width: 500px;
	}
	
	@media screen and (min-width: ${breakpoints.xl}) {
		max-width: 650px;
	}
`

export default MainBoarding
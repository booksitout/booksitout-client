import { Card } from "react-bootstrap"
import MainLogin from "./MainLogin"
import styled from 'styled-components';

const MainNoLoginPrompt = () => {
	return (
		<LoginContainer>
			<LoginCard>
				<Card.Body>
					<MainLogin />
				</Card.Body>
			</LoginCard>
		</LoginContainer>
	)
}

const LoginContainer = styled.div.attrs({
	className: 'row justify-content-center',
})``

const LoginCard = styled(Card).attrs({
	className: 'col-12 col-md-10 col-xl-6 shadow',
})`
	height: 525px;
	max-width: 800px;
	position: absolute;
	top: 825px;

	opacity: 1;
	z-index: 1;
`

export default MainNoLoginPrompt
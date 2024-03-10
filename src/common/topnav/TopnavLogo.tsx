import styled from 'styled-components';
import logo from '../../images/logo.png'

const TopnavLogo = () => {
    return (
        <Container href='/'>
			<LogoImage src={logo} alt='booksitout-logo' />
            <Space />
			<LogoText>책잇아웃</LogoText>
		</Container>
	)
}

const Container = styled.a.attrs(props => ({
    href: props.href,
    className: 'clickable'
}))`
    display: flex;
    align-items: center;
`;

const LogoImage = styled.img.attrs({
    className: 'image-fluid rounded'
})`
    width: 30px;
    height: 30px;
`;

const LogoText = styled.h1`
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0px;
`;

const Space = styled.div`
    padding-left: 5px;
    padding-right: 5px;
`;

export default TopnavLogo
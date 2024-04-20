import styled from 'styled-components';
import ColorConfig from '../config/ColorConfig';
import RowSpacer from './styles/RowSpacer';
import OAuthConfig from '../config/OAuthConfig';
import loginImage from '../images/relax.svg'

interface Props {
    message: string | null
}

const Login: React.FC<Props> = ({ message }) => {
    return (
        <NoLoginContainer>
            <Title>{message ?? '3초만에 로그인해 이용하기'}</Title>

            <RowSpacer />

            <OAuthContainer>
                {OAuthConfig.map(oauth => {
                    return (
                        <a href={oauth.redirectUrl} style={{ pointerEvents: !oauth.active ? 'none' : 'auto' }}>
                            <OAuthButton src={oauth.image} alt="" active={oauth.active} />
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

export default Login
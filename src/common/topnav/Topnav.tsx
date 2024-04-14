import styled from 'styled-components';
import TopnavLogo from './TopnavLogo';
import TopnavLink from './TopnavLink';
import RouteContainer from '../styles/RouteContainer';
import useUrl from '../hooks/useUrl';
import { Nav } from 'react-bootstrap';
import TopnavUserIcon from './TopnavUserIcon';

const Topnav = () => {
    const urls = useUrl()

    return (
        <TopnavContainer>
            <RouteContainer>
                <Container>
                    <TopnavLogo />

                    <LogoSpacer />

                    <TopnavLink label={'서재'} url={'/book'} isActive={urls.startsWith('/book')} />
                    <TopnavLink label={'도서관'} url={'/library'} isActive={urls.startsWith('/library')} />
                    <TopnavLink label={'커뮤니티'} url={'/community'} isActive={urls.startsWith('/community')} />

                    <LinkSpacer />

                    <TopnavUserIconContainer>
                        <TopnavUserIcon />
                    </TopnavUserIconContainer>
                </Container>
            </RouteContainer>
        </TopnavContainer>
    )
}

const TopnavContainer = styled.div`
    position: sticky;
    top: 0;
    z-index: 2000;
    background-color: white;

    border-bottom: 1px solid #e0e0e0;
`;

const Container = styled.div`
    display: flex;
    align-items: center;

    padding-top: 10px;
    padding-bottom: 10px;
`;

const LogoSpacer = styled.div`
    padding-left: 20px;
`;

const LinkSpacer = styled.div`
`;

const TopnavUserIconContainer = styled(Nav)`
    margin-left: auto;
    padding: 0px;
`;

export default Topnav
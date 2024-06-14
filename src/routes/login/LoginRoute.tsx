import styled from "styled-components";
import Login from "../../common/Login"
import RouteContainer from "../../common/styles/RouteContainer"

const LoginRoute = () => {
    return (
        <StyledRouteContainer>
            <Container>
                <Login message={null} />
            </Container>
        </StyledRouteContainer>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const StyledRouteContainer = styled(RouteContainer)`
    height: 85vh;
    overflow-y: hidden;
`;

export default LoginRoute
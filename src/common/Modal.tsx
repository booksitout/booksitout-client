import styled from 'styled-components';
import { Modal as BootstrapModal } from 'react-bootstrap'

interface Props {
    isShowing: boolean
    onClose: () => void
    titleText: string
    body: React.ReactNode
}

const Modal: React.FC<Props> = ({ isShowing, onClose, titleText, body }) => {
    return (
        <BootstrapModal show={isShowing} onHide={onClose} centered fullscreen='md-down'>
            <BootstrapModal.Header closeButton>
                <Title>{titleText}</Title>
            </BootstrapModal.Header>

            <BootstrapModal.Body>
                {body}
            </BootstrapModal.Body>
        </BootstrapModal>
    )
}

const Title = styled.h3`
    text-align: center;
`;

export default Modal
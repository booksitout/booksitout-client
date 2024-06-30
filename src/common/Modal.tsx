import React from "react";
import styled from 'styled-components';
import { Modal as BootstrapModal } from 'react-bootstrap'

interface Props {
    titleText: string

    isShowing: boolean
    isPreventClose?: boolean
    size?: 'sm' | 'lg' | 'xl'

    onClose: () => void
    body: React.ReactNode
}

const Modal: React.FC<Props> = ({ isShowing, onClose, titleText, body, isPreventClose , size}) => {
    return (
        <BootstrapModal show={isShowing} onHide={onClose} centered fullscreen='md-down' backdrop={isPreventClose ? 'static' : false} size={size}>
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
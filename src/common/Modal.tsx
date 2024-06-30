import React from "react";
import styled from 'styled-components';
import {Modal as BootstrapModal} from 'react-bootstrap'

interface Props {
    titleText: string | null

    isShowing: boolean
    isPreventClose?: boolean
    size?: 'sm' | 'md' | 'lg' | 'xl'

    onClose: () => void
    body: React.ReactNode
}

const Modal: React.FC<Props> = ({isShowing, onClose, titleText, body, isPreventClose, size}) => {
    return (
        <BootstrapModal
            show={isShowing}
            onHide={onClose}
            centered
            fullscreen='md-down'
            // @ts-ignore
            size={size}
        >
            {
                titleText !== null && (
                    <BootstrapModal.Header closeButton>
                        <Title>{titleText}</Title>
                    </BootstrapModal.Header>
                )
            }

            <BootstrapModal.Body>
                {body}
            </BootstrapModal.Body>
        </BootstrapModal>
    )
}

const Title = styled.h3`
    display: flex;
    text-align: center;
    justify-content: center;
    width: 100%;
`;

export default Modal
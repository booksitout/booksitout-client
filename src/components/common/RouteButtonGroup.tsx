import React from 'react'
import { ButtonGroup, ToggleButton } from 'react-bootstrap'
import styled from 'styled-components';
import { RouteButtonGroupType } from './RouteButtonGroupType';

interface RouteButtonGroupProps {
    buttons: RouteButtonGroupType[]
    currentKey: string | null
}

const RouteButtonGroup: React.FC<RouteButtonGroupProps> = (props) => {

    function getColSize(length: number): number {
        if (length === 1) {
            return 12
        }

        if (length === 2) {
            return 6
        }

        if (length === 3) {
            return 4
        }

        if (length === 4) {
            return 6
        }

        if (length === 5) {
            return 4
        }

        if (length === 6) {
            return 4
        }

        return 12
    }
    
    return (
        <ButtonGroup className='row w-100'>
            {
                props.buttons.map((button, index) => {
                    return (
                        <div className={`col-${getColSize(props.buttons.length)} ${(index === 0 || index === 3) ? 'pe-0' : 'p-0'}`}>
                            <Link href={button.url}>
                                <Button value={index} variant={props.currentKey === button.key ? 'book' : 'light'}>
                                    {button.label}
                                </Button>
                            </Link>
                        </div>
                    )
                })
            }
        </ButtonGroup>

    )
}

const Link = styled.a`
    width: 100%
`;

const Button = styled(ToggleButton).attrs({
    type: 'radio',
    checked: false,
    className: 'force-1-line'
})`
    width: 100%;
`;

export default RouteButtonGroup
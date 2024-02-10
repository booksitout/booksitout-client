import React from 'react'
import { Card } from 'react-bootstrap'
import AddButtonGroup from './AddButtonGroup'

interface Props {
    type: string
    ButtonGroup: React.ReactNode
}

const AddRouteButtonGroup: React.FC<Props> = ({ type, ButtonGroup }) => {
    return (
        <div className='mb-4'>
            <Card>
                <Card.Body>
                    <AddButtonGroup type={type} />
                    <div className="mb-2" />
                    {ButtonGroup}
                </Card.Body>
            </Card>
        </div>)
}

export default AddRouteButtonGroup
import React from 'react'
import { Card, Placeholder } from 'react-bootstrap'

interface Props {
    size: number
}

const LoadingBar: React.FC<Props> = ({ size }) => {
    return (
        <Placeholder as={Card.Text} animation='glow' className='mb-0'>
            <Placeholder xs={size} />
        </Placeholder>
    )
}

export default LoadingBar
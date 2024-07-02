import React, {useEffect, useRef} from 'react'
import {Form} from 'react-bootstrap'

interface Props extends React.ComponentPropsWithoutRef<typeof Form.Control> {
    isFocusOnAppear?: boolean
}

const NumberInput: React.FC<Props> = (props) => {

    const htmlInputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        if (htmlInputRef.current && props.isFocusOnAppear == true) {
            htmlInputRef.current.focus()
        }
    }, []);

    return (
        <Form.Control
            ref={htmlInputRef}
            type={'number'}
            pattern={'[0-9]*'}
            inputMode={'numeric'}
            {...props}
        />
    )
}

export default NumberInput

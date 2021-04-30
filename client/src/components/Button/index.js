import React from 'react'
import { ButtonComponent } from './ButtonElement'

const Button = ({text, click}) => {
    return (
        <ButtonComponent onClick={click}>
            { text }
        </ButtonComponent>
    )
}

export default Button

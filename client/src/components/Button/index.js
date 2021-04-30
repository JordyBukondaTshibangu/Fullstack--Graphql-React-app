import React from 'react'
import { ButtonComponent } from './ButtonElement'

const Button = ({text, to}) => {
    return (
        <ButtonComponent>
            { text }
        </ButtonComponent>
    )
}

export default Button

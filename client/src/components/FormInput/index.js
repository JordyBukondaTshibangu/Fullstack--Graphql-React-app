import React from 'react'
import { Input } from './FormInputElement'

const FormInput = ({placeholder, type}) => {
    return (
        <>
            <Input type={type} placeholder={placeholder} />
        </>
    )
}

export default FormInput

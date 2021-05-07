import React from 'react'
import { Input } from './FormInputElement'

const FormInput = ({ placeholder, type, handleChange }) => (
	<Input type={type} placeholder={placeholder} onChange={handleChange} />
)

export default FormInput

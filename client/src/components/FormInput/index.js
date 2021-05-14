import React from 'react'
import { Input } from './FormInputElement'

const FormInput = ({ placeholder, type, value, handleChange }) => (
	<Input type={type} placeholder={placeholder} value={value} onChange={handleChange} />
)

export default FormInput

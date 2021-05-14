import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import FormInput from '../../components/FormInput'
import FormLabel from '../../components/FormLabel'
import ButtonComponent from '../../components/Button'
import CountryPicker from '../../components/CountryPicker'
import DatePicker from '../../components/DatePicker'
import Error from '../../components/Error'
import { UserContext } from '../../context/UserContext'
import {
	Heading,
	FromContainer,
	LoginFormGroupInput,
	LoginFormGroupButton,
	RedirectRegister,
	LoginSpan,
	LinkRegister,
} from '../login/LoginElement'

const RegisterPage = () => {
	const history = useHistory()
	const { registerUser } = useContext(UserContext)
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [country, setCountry] = useState('')
	const [dateOfBirth, setDob] = useState(new Date())
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [errorMessage, setError] = useState(false)

	const handleRegistration = (event) => {
		event.preventDefault()
		if (password !== confirmPassword) {
			setError(true)
			return
		}
		if (
			name === '' ||
			email === '' ||
			country === '' ||
			dateOfBirth === '' ||
			password === '' ||
			confirmPassword === ''
		) {
			setError(true)
			return
		}
		const createdUser = {
			name,
			email,
			password,
			country,
			dateOfBirth,
		}
		registerUser(createdUser)
		history.push('/')
	}

	return (
		<>
			<FromContainer onSubmit={handleRegistration}>
				{	
					errorMessage ? (
					<Error error='Please ensure sll details are entered and the passwords matches' />
				) : (
					<>
						<Heading>Welcome warriors</Heading>

						<LoginFormGroupInput>
							<FormLabel label='FullName' />
							<FormInput
								value={name}
								handleChange={(event) => setName(event.target.value)}
								type='text'
								placeholder='Fullname'
								required
							/>
						</LoginFormGroupInput>
						<LoginFormGroupInput>
							<FormLabel label='Email' />
							<FormInput
								value={email}
								handleChange={(event) => setEmail(event.target.value)}
								type='text'
								placeholder='Email'
								required
							/>
						</LoginFormGroupInput>
						<LoginFormGroupInput>
							<FormLabel label='Country' />
							<CountryPicker country={country} setCountry={setCountry} />
						</LoginFormGroupInput>
						<LoginFormGroupInput>
							<FormLabel label='Date of birth' />
							<DatePicker dateOfBirth={dateOfBirth} setDob={setDob} />
						</LoginFormGroupInput>
						<LoginFormGroupInput>
							<FormLabel label='Password' />
							<FormInput
								value={password}
								handleChange={(event) => setPassword(event.target.value)}
								type='password'
								placeholder='Password'
								required
							/>
						</LoginFormGroupInput>
						<LoginFormGroupInput>
							<FormLabel label='Confirm password' />
							<FormInput
								value={confirmPassword}
								handleChange={(event) => setConfirmPassword(event.target.value)}
								type='password'
								placeholder='Password'
								required
							/>
						</LoginFormGroupInput>
						<LoginFormGroupButton>
							<ButtonComponent text='Register' type='submit' />
							<RedirectRegister>
								<LoginSpan> Already a warrior ? </LoginSpan>
								<LinkRegister to='/login'>Sign in</LinkRegister>
							</RedirectRegister>
						</LoginFormGroupButton>
					</>
				)}
			</FromContainer>
		</>
	)
}

export default RegisterPage

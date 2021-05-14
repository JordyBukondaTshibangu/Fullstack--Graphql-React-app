import React, { useState, useEffect } from 'react'
import { useMutation } from '@apollo/client'
import { useHistory } from 'react-router-dom'
import { LOGIN_USER } from '../../graphql/Mutations'
import FormInput from '../../components/FormInput'
import FormLabel from '../../components/FormLabel'
import ButtonComponent from '../../components/Button'
import Error from '../../components/Error'
import {
	Heading,
	FromContainer,
	LoginFormGroupInput,
	LoginFormGroupButton,
	RedirectRegister,
	LoginSpan,
	LinkRegister,
} from './LoginElement'
import Loader from '../../components/Loader'

const LoginPage = () => {
	const history = useHistory()
	const [login, { data }] = useMutation(LOGIN_USER)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [errorMessage, setError] = useState(false)
	const [loading, setLoading] = useState(false)

	const [user, setUser] = useState({
		name: '',
		email: '',
		dateOfBirth: '',
		country: '',
	})
	const [token, setToken] = useState('')
	const [success, setSuccess] = useState(false)

	useEffect(() => {
		if (data) {
			const { login } = data
			setLoading(true)
			if (login) {
				setUser(() => ({ ...login }))
				setToken(login.token)
				localStorage.setItem('user', JSON.stringify(user))
				localStorage.setItem('token', JSON.stringify(token))
				setSuccess(true)
			} else {
				setError(true)
				setLoading(false)
			}
		}
	}, [data, token, user, login])

	if (success) {
		history.push('/')
	}

	const handleLogin = (event) => {
		event.preventDefault()
		if (email === '' || password === '') {
			setError(true)
			return
		}
		login({ variables: { email, password } })
		setLoading(true)

		if (success) {
			history.push('/')
		}
	}

	return (
		<>
			<FromContainer onSubmit={handleLogin}>
				{errorMessage ? (
					<Error error='Please ensure your credentials are correct' />
				) : (
					<>
						{loading && <Loader />}

						<Heading>Welcome Back warriors</Heading>
						<LoginFormGroupInput>
							<FormLabel label='Email' />
							<FormInput
								type='text'
								placeholder='Email'
								value={email}
								handleChange={(event) => setEmail(event.target.value)}
							/>
						</LoginFormGroupInput>
						<LoginFormGroupInput>
							<FormLabel label='Password' />
							<FormInput
								type='password'
								placeholder='Password'
								value={password}
								handleChange={(event) => setPassword(event.target.value)}
							/>
						</LoginFormGroupInput>
						<LoginFormGroupButton>
							<ButtonComponent text='Login' type='submit' />
							<RedirectRegister>
								<LoginSpan> Not a warrior yet ? </LoginSpan>
								<LinkRegister to='/register'>Sign up</LinkRegister>
							</RedirectRegister>
						</LoginFormGroupButton>
					</>
				)}
			</FromContainer>
		</>
	)
}

export default LoginPage

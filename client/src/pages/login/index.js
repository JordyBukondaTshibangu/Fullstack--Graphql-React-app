import React from 'react'
import FormInput from '../../components/FormInput'
import FormLabel from '../../components/FormLabel'
import ButtonComponent from '../../components/Button'

import {
	Heading,
	FromContainer,
	LoginFormGroupInput,
	LoginFormGroupButton,
	RedirectRegister,
	LoginSpan,
	LinkRegister,
} from './LoginElement'

const LoginPage = () => {
	return (
		<>
			<FromContainer>
				<Heading>Welcome Back warriors</Heading>
				<LoginFormGroupInput>
					<FormLabel label='Email' />
					<FormInput type='text' placeholder='Email' />
				</LoginFormGroupInput>
				<LoginFormGroupInput>
					<FormLabel label='Password' />
					<FormInput type='password' placeholder='Password' />
				</LoginFormGroupInput>
				<LoginFormGroupButton>
					<ButtonComponent text='Login'/>
					<RedirectRegister>
						<LoginSpan> Not a warrior yet ? </LoginSpan>
						<LinkRegister to="/register">Sign up</LinkRegister>
					</RedirectRegister>
				</LoginFormGroupButton>
			</FromContainer>
		</>
	)
}

export default LoginPage

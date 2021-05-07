import React from 'react'
import FormInput from '../../components/FormInput'
import FormLabel from '../../components/FormLabel'
import ButtonComponent from '../../components/Button'
import CountryPicker from '../../components/CountryPicker'
import DatePicker from '../../components/DatePicker'
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
	return (
		<>
			<FromContainer>
				<Heading>Welcome warriors</Heading>
				<LoginFormGroupInput>
					<FormLabel label='Email' />
					<FormInput type='text' placeholder='Email' />
				</LoginFormGroupInput>
				<LoginFormGroupInput>
					<FormLabel label='Country' />
					<CountryPicker />
				</LoginFormGroupInput>
				<LoginFormGroupInput>
					<FormLabel label='Date of birth' />
					<DatePicker />
				</LoginFormGroupInput>
				<LoginFormGroupInput>
					<FormLabel label='Password' />
					<FormInput type='password' placeholder='Password' />
				</LoginFormGroupInput>
				<LoginFormGroupInput>
					<FormLabel label='Confirm password' />
					<FormInput type='password' placeholder='Password' />
				</LoginFormGroupInput>
				<LoginFormGroupButton>
					<ButtonComponent text='Login' />
					<RedirectRegister>
						<LoginSpan> Already a warrior ? </LoginSpan>
						<LinkRegister to='/login'>Sign in</LinkRegister>
					</RedirectRegister>
				</LoginFormGroupButton>
			</FromContainer>
		</>
	)
}

export default RegisterPage

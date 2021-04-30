import React from 'react'
import DatePicker from '../../components/DatePicker'
import CountryPicker from '../../components/CountryPicker'

import {
	ProfileContainer,
	DetailContainer,
	AvatarContainer,
} from './ProfileElement'

import {
	LoginFormGroupInput,
	LoginFormGroupButton,
	RedirectRegister,
	LinkRegister,
} from '../login/LoginElement'


const Profile = () => {
	return (
		<ProfileContainer>
			<DetailContainer>
				<LoginFormGroupInput>
					<FormLabel label='Email' />
					<FormInput type='text' placeholder='Email' />
				</LoginFormGroupInput>
				<LoginFormGroupInput>
					<FormLabel label='Country' />
					<CountryPicker />
				</LoginFormGroupInput>
				<LoginFormGroupInput>
					<FormLabel label='Password' />
					<DatePicker />
				</LoginFormGroupInput>
				<LoginFormGroupButton>
					<ButtonComponent text='Login' />
					<RedirectRegister>
						<LinkRegister to='/login'>Sign in</LinkRegister>
					</RedirectRegister>
				</LoginFormGroupButton>
			</DetailContainer>
			<AvatarContainer></AvatarContainer>
		</ProfileContainer>
	)
}

export default Profile

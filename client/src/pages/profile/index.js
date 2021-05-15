import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { useMutation } from '@apollo/client'
import { UPDATE_PROFILE } from '../../graphql/Mutations'
import DatePicker from '../../components/DatePicker'
import CountryPicker from '../../components/CountryPicker'
import FormInput from '../../components/FormInput'
import FormLabel from '../../components/FormLabel'
import Button from '../../components/Button'
import userAvater from '../../assets/userAvater.png'

import {
	ProfileContainer,
	DetailContainer,
	AvatarContainer,
	UserDetails,
	GroupButton,
	ProfileImage,
	ProfileName,
	EnableEditButton
} from './ProfileElement'

import { LoginFormGroupInput } from '../login/LoginElement'

const Profile = () => {

	const history = useHistory()
	const user = JSON.parse(localStorage.getItem('user'))

	const [ updateProfile , { data }] = useMutation(UPDATE_PROFILE)

	const [name, setName] = useState(user.name)
	const [email, setEmail] = useState(user.email)
	const [country, setCountry] = useState(user.country)
	const [dateOfBirth, setDob] = useState(user.dateOfBirth)

	const [showDatePicker, setShowDatePicker] = useState(false)
	const [showCountryPicker, setShowCountryPicker] = useState(false)
	const [edit, setEdit] = useState(false)

	const handleStartEdit = () => {
		setShowCountryPicker(true)
		setShowDatePicker(true)
		setEdit(true)
	}

	const handleEdit = (event) => {
		event.preventDefault()
		// const updatedUser = { name, email, country, dateOfBirth } 
		// updateProfile({variables : { UpdatedUser : updatedUser}})
	}

	const handleCancel = () => {
		history.push('/')
	}

	return (
		<ProfileContainer onSubmit={handleEdit}>
			<UserDetails>
				<AvatarContainer>
					<ProfileImage src={userAvater} alt='/' />
					<ProfileName>{name}</ProfileName>
				</AvatarContainer>
				<DetailContainer>
					<LoginFormGroupInput>
						<LoginFormGroupInput>
							<FormLabel label='Fullname' />
							<FormInput
								type='text'
								placeholder='Name'
								value={name}
								handleChange={(event) => setName(event.target.value)}
							/>
						</LoginFormGroupInput>
						<FormLabel label='Email' />
						<FormInput
							type='text'
							placeholder='Email'
							value={email}
							handleChange={(event) => setEmail(event.target.value)}
						/>
					</LoginFormGroupInput>
					<LoginFormGroupInput>
						<FormLabel label='Country : ' />
						<FormLabel label={country} />
					</LoginFormGroupInput>
					{showCountryPicker && (
						<LoginFormGroupInput>
							<FormLabel label='Update Country' />
							<CountryPicker country={country} setCountry={setCountry} />
						</LoginFormGroupInput>
					)}
					<LoginFormGroupInput>
						<FormLabel label='Date of birth : ' />
						<FormLabel label={dateOfBirth} />
					</LoginFormGroupInput>
					{showDatePicker && (
						<LoginFormGroupInput>
							<FormLabel label='Date of birth' />
							<DatePicker dateOfBirth={new Date()} setDob={setDob} />
						</LoginFormGroupInput>
					)}
				</DetailContainer>
			</UserDetails>
			<GroupButton>
				<Button text={edit ? 'Cancel' : 'Back'} click={handleCancel} />
				{!edit ? (
					<EnableEditButton onClick={handleStartEdit}>Start editing</EnableEditButton>
				) : (
					 <Button text='Edit' type='submit' />
				)}
			</GroupButton>
		</ProfileContainer>
	)
}

export default Profile

import React from 'react'
import {
	PersonContainer,
	PersonDetailWrapper,
	PersonDetails,
	PersonDetailKey,
	ButtonWrapper,
} from '../person/PersonElement'
import { AddPersonContainer } from './AddPersonElement'
import FormInput from '../../components/FormInput'
import Button from '../../components/Button'

const AddPerson = () => {
	return (
		<AddPersonContainer>
			<PersonContainer>
				<PersonDetailWrapper>
					<PersonDetails>
						<PersonDetailKey> Name : </PersonDetailKey>
						<FormInput />
					</PersonDetails>
					<PersonDetails>
						<PersonDetailKey> Height : </PersonDetailKey>
						<FormInput />
					</PersonDetails>
					<PersonDetails>
						<PersonDetailKey> Mass : </PersonDetailKey>
						<FormInput />
					</PersonDetails>
					<PersonDetails>
						<PersonDetailKey> Gender : </PersonDetailKey>
						<FormInput />
					</PersonDetails>
					<PersonDetails>
						<PersonDetailKey> Homeworld : </PersonDetailKey>
						<FormInput />
					</PersonDetails>
				</PersonDetailWrapper>
				<ButtonWrapper>
					<Button text='Add a warrior' />
				</ButtonWrapper>
			</PersonContainer>
		</AddPersonContainer>
	)
}

export default AddPerson

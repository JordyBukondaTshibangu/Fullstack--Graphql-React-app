import React from 'react'
import {
	PersonContainer,
	PersonDetailWrapper,
	PersonDetails,
	PersonDetailKey,
	ButtonWrapper,
} from '../person/PersonElement'
import { AddPersonContainer } from '../addPerson/AddPersonElement'
import FormInput from '../../components/FormInput'
import Button from '../../components/Button'

const EditPerson = () => {
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
					<Button text='Edit info' />
				</ButtonWrapper>
			</PersonContainer>
		</AddPersonContainer>
	)
}

export default EditPerson

import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useHistory } from 'react-router-dom'
import { ADD_PERSON } from '../../graphql/Mutations'
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
	const history = useHistory()
	const [createPerson] = useMutation(ADD_PERSON)

	const [name, setName] = useState('')
	const [height, setHeight] = useState('')
	const [mass, setMass] = useState('')
	const [gender, setGender] = useState('')
	const [homeworld, setHomeworld] = useState('')

	const createNewPerson = (event) => {
		event.preventDefault()

		const newPerson = {
			name,
			height,
			mass,
			gender,
			homeworld,
		}
		createPerson({ variables: { CreatedPersonInput: newPerson } })

		setName('')
		setHeight('')
		setMass('')
		setGender('')
		setHomeworld('')

		setTimeout(() => {
			history.push('/')
		}, 2000)
	}

	return (
		<AddPersonContainer onSubmit={createNewPerson}>
			<PersonContainer>
				<PersonDetailWrapper>
					<PersonDetails>
						<PersonDetailKey> Name : </PersonDetailKey>
						<FormInput
							type='text'
							handleChange={(event) => setName(event.target.value)}
						/>
					</PersonDetails>
					<PersonDetails>
						<PersonDetailKey> Height : </PersonDetailKey>
						<FormInput
							type='number'
							handleChange={(event) => setHeight(event.target.value)}
						/>
					</PersonDetails>
					<PersonDetails>
						<PersonDetailKey> Mass : </PersonDetailKey>
						<FormInput
							type='number'
							handleChange={(event) => setMass(event.target.value)}
						/>
					</PersonDetails>
					<PersonDetails>
						<PersonDetailKey> Gender : </PersonDetailKey>
						<FormInput
							type='text'
							handleChange={(event) => setGender(event.target.value)}
						/>
					</PersonDetails>
					<PersonDetails>
						<PersonDetailKey> Homeworld : </PersonDetailKey>
						<FormInput
							type='text'
							handleChange={(event) => setHomeworld(event.target.value)}
						/>
					</PersonDetails>
				</PersonDetailWrapper>
				<ButtonWrapper>
					<Button text='Add a warrior' type='submit' />
				</ButtonWrapper>
			</PersonContainer>
		</AddPersonContainer>
	)
}

export default AddPerson

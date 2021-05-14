import React from 'react'
import { CountryDropdown } from 'react-country-region-selector'
import { CountryContainer } from './CountryElement'

const CountryPicker = ({country, setCountry}) => {
	return (
		<CountryContainer>
			<CountryDropdown
				value={country}
				onChange={(val) => setCountry(val)}
				style={{
                    width : '150px',
                    fontFamily: 'Times New Roman Georgia Garamond'
				}}
			/>
		</CountryContainer>
	)
}

export default CountryPicker

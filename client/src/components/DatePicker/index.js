import React from 'react'
import DatePicker from 'react-datepicker'
import { DateContainer } from './DatePickerElement'

import 'react-datepicker/dist/react-datepicker.css'

const CalendarPicker = ({dateOfBirth, setDob}) => {
	return (
		<DateContainer>
			<DatePicker
				selected={dateOfBirth}
				onChange={(date) => setDob(date)}
				style={{
					width: '150px',
					fontFamily: 'Times New Roman Georgia Garamond',
				}}
			/>
		</DateContainer>
	)
}

export default CalendarPicker

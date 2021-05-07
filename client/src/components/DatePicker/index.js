import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { DateContainer } from './DatePickerElement'

import 'react-datepicker/dist/react-datepicker.css'

const CalendarPicker = () => {
	const [startDate, setStartDate] = useState(new Date())
	return (
		<DateContainer>
			<DatePicker
				selected={startDate}
				onChange={(date) => setStartDate(date)}
				style={{
					width: '150px',
					fontFamily: 'Times New Roman Georgia Garamond',
				}}
			/>
		</DateContainer>
	)
}

export default CalendarPicker

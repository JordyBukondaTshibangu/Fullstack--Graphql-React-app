import React from 'react'
import { ErrorContainer, ErrorTitle, ErrorMessage, Tool } from './ErrorElement'

const Error = ({error}) => {
  return (
    <ErrorContainer>
        <ErrorTitle>Message</ErrorTitle>
        <ErrorMessage>
            Oupsssss.... an error occurred <Tool />
        </ErrorMessage>
    </ErrorContainer>
  )
}

export default Error
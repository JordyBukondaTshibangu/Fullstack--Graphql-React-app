import React from 'react'
import { ErrorContainer, ErrorTitle, ErrorMessage, Tool } from './ErrorElement'

const Error = ({error}) => {
  return (
    <ErrorContainer>
        <ErrorTitle>Message</ErrorTitle>
        <ErrorMessage>
           {
             error === '' ? 'Oupsssss.... an error occurred' : error 
           }
            <Tool />
        </ErrorMessage>
    </ErrorContainer>
  )
}

export default Error
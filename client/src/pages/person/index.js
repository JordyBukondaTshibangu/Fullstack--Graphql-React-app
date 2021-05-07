import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { FETCH_PERSON } from '../../graphql/Queries'
import Loader from '../../components/Loader/index'
import Error from '../../components/Error/'

import { PersonContainer, PersonDetailWrapper, PersonDetails, PersonDetailKey, ButtonWrapper, Button } from './PersonElement'


const PersonPage = (props) => {

    const personName = props.match.params.name
    const [ person, setPerson ] = useState({});

    const { loading, error, data } = useQuery(FETCH_PERSON, { variables: { filter : personName }});

    useEffect(() => {
        if(data){
            setPerson(data.person)
        }
    }, [data])
    
    if(loading) return <Loader />;
    if(error) return <Error />;

    const { name, height, mass, gender, homeworld } = person

    return (
        <PersonContainer>
            <PersonDetailWrapper>
                <PersonDetails>
                    <PersonDetailKey> Name : </PersonDetailKey>   { name } 
                </PersonDetails>
                <PersonDetails>
                    <PersonDetailKey> Height : </PersonDetailKey>   { height } 
                </PersonDetails>
                <PersonDetails>
                    <PersonDetailKey> Mass : </PersonDetailKey>   { mass } 
                </PersonDetails>
                <PersonDetails>
                    <PersonDetailKey> Gender : </PersonDetailKey>   { gender } 
                </PersonDetails>
                <PersonDetails>
                    <PersonDetailKey> Homeworld : </PersonDetailKey>   { homeworld } 
                </PersonDetails>
            </PersonDetailWrapper>
            <ButtonWrapper>
                <Button to="/" id="button">  View all warriors </Button>
                <Button to="/add-person" id="button">  Add person </Button>
            </ButtonWrapper>
        </PersonContainer>
    )
}

export default PersonPage
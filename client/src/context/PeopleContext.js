import React, { createContext , useReducer, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { FETCH_ALL_PEOPLE } from '../graphql/Queries';


export const PeopleContext = createContext();

const initialState = {
    loading : true,
    error : false,
    allPeople : [],
    person : {}
}

const reducer = (state, action) => {
    switch(action.type){
        case 'FETCH_PEOPLE_SUCCESS' : 
            return {
                ...state,
                loading : false,
                error : false,
                allPeople : action.payload
            }
        case 'FETCH_PEOPLE_FAILURE' : 
            return {
                ...state,
                loading : false,
                error : true,
                allPeople : []
            }
        default :
            return state
    }
}

const PeopleContextProvider = props => {

    const {  error, data } = useQuery(FETCH_ALL_PEOPLE);

    const [ state, dispatch ] = useReducer(reducer, initialState)

    useEffect(() => {

        if(data) dispatch({type : 'FETCH_PEOPLE_SUCCESS', payload : data.allPeople})
        if(error)  dispatch({type : 'FETCH_PEOPLE_FAILURE'})
        
    }, [data, error])

    const searchPerson = (name) => {
        console.log(name)
    }

    return (
        <PeopleContext.Provider value={{state, searchPerson}}>
            { props.children }
        </PeopleContext.Provider>
    )
}

export default PeopleContextProvider;

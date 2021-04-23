import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa'
import { useQuery } from '@apollo/client';
import { FETCH_PERSON } from '../../graphql/Queries'
import { SearchbarContainer, SearchbarForm, SearchInput, SearchResult } from './SearchbarElement';
import WarriorCard from '../WarriorCard/index';
import Loader from '../Loader/index'

const SearchBar = () => {
        
    const [ name, setName ] = useState("");
    const [ person, setPerson ] = useState({});

    const { loading, data } = useQuery(FETCH_PERSON, { variables: { filter : name }});

    useEffect(() => {
        if(data){
            setPerson(data.person)
        }
    }, [data])
    
    return (
        <SearchbarContainer>
            <SearchbarForm>
                <SearchInput placeholder="Enter warrior name" value={name} onChange={event => setName(event.target.value)} id="search-bar-warrior"/>
                <FaSearch />
            </SearchbarForm>
            <SearchResult>
                { loading ?
                     <Loader id="loading-spinner"/>
                     : 
                     person && <WarriorCard person={person} shadow={true} /> 
                }
            </SearchResult>
        </SearchbarContainer>
    )
}



export default SearchBar

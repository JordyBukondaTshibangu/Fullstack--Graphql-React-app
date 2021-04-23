import React, { useContext } from 'react'
import { PeopleContext } from '../../context/PeopleContext'
import WarriorCard from '../../components/WarriorCard/index'
import SearchBar from '../../components/SearchBar/index'
import Loader from '../../components/Loader/index'
import Error from '../../components/Error/'

import { HomePageContainer,SearchContainer, Heading, PeopleContainer, RocketIcon } from './HomePageElement'


const HomePage = () => {

    const { state }  = useContext(PeopleContext)
    const { loading, error, allPeople }  = state

    if(error) return <Error error={error} />
    if(loading) return <Loader />

    return (
        <HomePageContainer>
            <SearchContainer>
                <SearchBar />
            </SearchContainer>
            <Heading> 
                <RocketIcon />
                    Your star wars Warriors 
                <RocketIcon />
            </Heading>
            <PeopleContainer>
            {
                allPeople.map((person, index) => <WarriorCard key={index} person={person} shadow={false}/>)
            }
            </PeopleContainer>
        </HomePageContainer>
    )
}

export default HomePage;

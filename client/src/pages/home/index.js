import React, { useContext } from 'react'
import { PeopleContext } from '../../context/PeopleContext'
import WarriorCard from '../../components/WarriorCard/'
import SearchBar from '../../components/SearchBar/'
import Pagination from '../../components/Pagination/'
import Loader from '../../components/Loader/'
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
            <Pagination />
        </HomePageContainer>
    )
}

export default HomePage;

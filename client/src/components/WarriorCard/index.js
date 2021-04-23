import React from 'react';
import { WarriorCardContainer, Warrior, WarriorDetail, WarriorDetailKey, AlienIcon, MaleIcon, FemaleIcon, WarriorLink } from './WarriorCardElement'

const WarriorCard = ({person}) => {
    const { name, gender } = person;
    return (
        <WarriorCardContainer>
            <Warrior>
                <WarriorDetail>
                    <WarriorDetailKey>Name : </WarriorDetailKey>
                        {name}
                    <AlienIcon/>
                </WarriorDetail>
                
                <WarriorDetail>
                <WarriorDetailKey> Gender : </WarriorDetailKey>
                    {
                        gender === 'male' ? <MaleIcon /> : <FemaleIcon />
                    }
                </WarriorDetail>
                <WarriorLink to={`/people/${name}`}>
                    View Profil
                </WarriorLink>
            </Warrior>

        </WarriorCardContainer>
    )
}

export default WarriorCard

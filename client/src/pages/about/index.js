import React from 'react'
import { FaLaptopMedical, FaGithub } from 'react-icons/fa'
import { AboutContainer, AboutContent, RepoLink } from './AboutElement';

const About = ({error}) => {
  return (
    <AboutContainer>
        <AboutContent>
            My name is Jordy Tshibss and I am a future Senior Fullstack Engineer....<FaLaptopMedical/> 
        </AboutContent>
        <RepoLink href="https://github.com/JordyBukondaTshibangu" target="blank">
            <FaGithub/>Check out my GitHub <FaGithub/>
        </RepoLink>
    </AboutContainer>
  )
}

export default About
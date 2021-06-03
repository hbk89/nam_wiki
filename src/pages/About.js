import React from 'react';
import Header from '../components/Header/Header'
import Section from '../components/Section/Section'

const About = ({match}) => {
    return (
    <div className="App">
        <Header/>
        <Section name = {match.params.name}/>
      </div>
    )
}

export default About;
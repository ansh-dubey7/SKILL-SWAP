import React from 'react'
import Hero from "../components/hero.jsx"
import Events from "../components/events.jsx"
import Upcoming from "../components/upcoming.jsx"
import Benefits from "../components/benefits.jsx"
import Steps from "../components/steps.jsx"

const Home = () => {
  return (
    <>
      <Hero/>
      <Events/>
      <Upcoming/>
      <Benefits/>
      <Steps/>
    </>
  )
}

export default Home

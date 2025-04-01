import React from "react"
import Header from "./components/header.jsx"
import Hero from "./components/hero.jsx"
import Events from "./components/events.jsx"
import Upcoming from "./components/upcoming.jsx"
import Benefits from "./components/benefits.jsx"
import Steps from "./components/steps.jsx"
import Footer from "./components/footer.jsx"

function App() {

  return (
    <div className="bg-black overflow-x-hidden">
      <Header/>
      <Hero/>
      <Events/>
      <Upcoming/>
      <Benefits/>
      <Steps/>
      <Footer/>
    </div>
  )
}

export default App

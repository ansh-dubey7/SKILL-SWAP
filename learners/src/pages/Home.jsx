import React from 'react';
import Hero from "../components/hero.jsx";
import Events from "../components/events.jsx";
import Upcoming from "../components/upcoming.jsx";
import Benefits from "../components/benefits.jsx";
import Steps from "../components/steps.jsx";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleApplyClick = () => {
    if (user) {
      navigate('/application');
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      <Hero onApplyClick={handleApplyClick} />
      <Events />
      <Upcoming />
      <Benefits onApplyClick={handleApplyClick} />
      <Steps />
    </>
  );
};

export default Home;

// import React from 'react'
// import Hero from "../components/hero.jsx"
// import Events from "../components/events.jsx"
// import Upcoming from "../components/upcoming.jsx"
// import Benefits from "../components/benefits.jsx"
// import Steps from "../components/steps.jsx"

// const Home = () => {
//   return (
//     <>
//       <Hero/>
//       <Events/>
//       <Upcoming/>
//       <Benefits/>
//       <Steps/>
//     </>
//   )
// }

// export default Home

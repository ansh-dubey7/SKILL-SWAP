// src/pages/Home.jsx
import React from "react";
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
      navigate("/application");
    } else {
      navigate("/login");
    }
  };

  const handleQuizzesClick = () => {
    if (user) {
      navigate("/quizzes"); // Go to quizzes page
    } else {
      navigate("/login"); // Ask to log in
    }
  };

  return (
    <>
      <Hero onApplyClick={handleApplyClick} />
      <Events />
      <Upcoming />
      <Benefits onApplyClick={handleApplyClick} />
      <Steps />
      {user && ( // Show button only if logged in
        <div className="flex justify-center py-6">
          <button
            onClick={handleQuizzesClick}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Quizzes and Tests
          </button>
        </div>
      )}
    </>
  );
};

export default Home;

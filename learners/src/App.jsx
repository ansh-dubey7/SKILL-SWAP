import React from "react"
import { Routes, Route } from "react-router-dom";
import Header from "./components/header.jsx"
import Footer from "./components/footer.jsx"
import Home from "./pages/Home.jsx"
import Application from "./pages/Application.jsx"

function App() {

  return (
    <div className="bg-black overflow-x-hidden">
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/application" element={<Application />} />
        </Routes>
      <Footer/>
    </div>
  )
}

export default App

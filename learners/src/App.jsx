import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Home from "./pages/Home.jsx";
import Application from "./pages/Application.jsx";
import LoginPage from "./pages/Login.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

function App() {
  return (
    <AuthProvider>
      <div className="bg-black overflow-x-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/application" element={<Application />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;

// import React from "react"
// import { Routes, Route } from "react-router-dom";
// import Header from "./components/header.jsx"
// import Footer from "./components/footer.jsx"
// import Home from "./pages/Home.jsx"
// import Application from "./pages/Application.jsx"
// import LoginPage from "./pages/Login.jsx";

// function App() {

//   return (
//     <div className="bg-black overflow-x-hidden">
//       <Header/>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/application" element={<Application />} />
//           <Route path="/login" element={<LoginPage />} />
//         </Routes>
//       <Footer/>
//     </div>
//   )
// }

// export default App

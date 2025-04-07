import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Home from "./pages/Home.jsx";
import Application from "./pages/Application.jsx";
import LoginPage from "./pages/Login.jsx";
import { AuthProvider, useAuth } from "./context/AuthContext";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <div className="bg-black overflow-x-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/application" element={<ProtectedRoute><Application /></ProtectedRoute>}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;


// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Header from "./components/header.jsx";
// import Footer from "./components/footer.jsx";
// import Home from "./pages/Home.jsx";
// import Application from "./pages/Application.jsx";
// import LoginPage from "./pages/Login.jsx";
// import { AuthProvider } from "./context/AuthContext.jsx";

// function App() {
//   return (
//     <AuthProvider>
//       <div className="bg-black overflow-x-hidden">
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/application" element={<Application />} />
//           <Route path="/login" element={<LoginPage />} />
//         </Routes>
//         <Footer />
//       </div>
//     </AuthProvider>
//   );
// }

// export default App;
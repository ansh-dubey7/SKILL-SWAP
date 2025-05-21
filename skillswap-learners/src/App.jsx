// src/App.jsx
// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Home from "./pages/Home.jsx";
import Application from "./pages/Application.jsx";
import LoginPage from "./pages/Login.jsx";
import Quizzes from "./pages/Quizzes.jsx"; // Add this line
import { AuthProvider, useAuth } from "./context/AuthContext";

// Protected Route (only logged-in users can see)
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
          <Route path="/application" element={<ProtectedRoute><Application /></ProtectedRoute>} />
          <Route path="/quizzes" element={<ProtectedRoute><Quizzes /></ProtectedRoute>} /> {/* Add this line */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;


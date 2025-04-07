// import React, { createContext, useState, useContext } from 'react';
// import axios from 'axios';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const login = async (emailOrPhone, password) => {
//     const res = await axios.post('http://localhost:5000/api/auth/login', {
//       emailOrPhone,
//       password,
//     });
//     localStorage.setItem('token', res.data.token);
//     setUser({ role: res.data.role });
//   };

//   const register = async (emailOrPhone, password, role) => {
//     const res = await axios.post('http://localhost:5000/api/auth/register', {
//       emailOrPhone,
//       password,
//       role,
//     });
//     localStorage.setItem('token', res.data.token);
//     setUser({ role: res.data.role });
//   };

//   const logout = () => {
//     localStorage.removeItem('token');
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, register, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  // Ensure this URL matches your backend server
  const API_URL = 'http://localhost:5000/api/auth'; // Update port if needed

  const login = async (emailOrPhone, password) => {
    try {
      const res = await axios.post(`${API_URL}/login`, {
        emailOrPhone,
        password,
      });
      localStorage.setItem('token', res.data.token);
      setUser({ id: res.data.id, role: res.data.role });
      return res.data;
    } catch (error) {
      console.error('Login error:', error);
      throw error.response?.data || { message: 'Login failed' };
    }
  };

  const register = async (emailOrPhone, password, role) => {
    try {
      const res = await axios.post(`${API_URL}/register`, {
        emailOrPhone,
        password,
        role,
      });
      localStorage.setItem('token', res.data.token);
      setUser({ id: res.data.id, role: res.data.role });
      return res.data;
    } catch (error) {
      console.error('Register error:', error);
      throw error.response?.data || { message: 'Registration failed' };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
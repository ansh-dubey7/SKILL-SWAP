import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';
import { API_URL } from '../config';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = JSON.parse(atob(token.split('.')[1]));
        return { id: decoded.id, role: decoded.role };
      } catch (e) {
        console.error('Invalid token:', e);
        localStorage.removeItem('token');
        return null;
      }
    }
    return null;
  });

  const login = async (emailOrPhone, password) => {
    try {
      const res = await axios.post(`${API_URL}/api/auth/login`, { emailOrPhone, password });
      localStorage.setItem('token', res.data.token);
      setUser({ id: res.data.id, role: res.data.role });
      return res.data;
    } catch (error) {
      console.error('Login error:', error);
      throw error.response?.data || { message: 'Login failed' };
    }
  };

  const register = async (emailOrPhone, password, role, name) => {
    try {
      const res = await axios.post(`${API_URL}/api/auth/register`, { emailOrPhone, password, role, name });
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





// import React, { createContext, useState, useContext } from 'react';
// import axios from 'axios';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       try {
//         const decoded = JSON.parse(atob(token.split('.')[1]));
//         return { id: decoded.id, role: decoded.role };
//       } catch (e) {
//         console.error('Invalid token:', e);
//         localStorage.removeItem('token');
//         return null;
//       }
//     }
//     return null;
//   });

//   const API_URL = 'http://localhost:5000/api/auth';

//   const login = async (emailOrPhone, password) => {
//     try {
//       const res = await axios.post(`${API_URL}/login`, { emailOrPhone, password });
//       localStorage.setItem('token', res.data.token);
//       setUser({ id: res.data.id, role: res.data.role });
//       return res.data;
//     } catch (error) {
//       console.error('Login error:', error);
//       throw error.response?.data || { message: 'Login failed' };
//     }
//   };

//   const register = async (emailOrPhone, password, role, name) => { // Added name
//     try {
//       const res = await axios.post(`${API_URL}/register`, { emailOrPhone, password, role, name });
//       localStorage.setItem('token', res.data.token);
//       setUser({ id: res.data.id, role: res.data.role });
//       return res.data;
//     } catch (error) {
//       console.error('Register error:', error);
//       throw error.response?.data || { message: 'Registration failed' };
//     }
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




import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (emailOrPhone, password) => {
    const res = await axios.post('http://localhost:5000/api/auth/login', {
      emailOrPhone,
      password,
    });
    localStorage.setItem('token', res.data.token);
    setUser({ role: res.data.role });
  };

  const register = async (emailOrPhone, password, role) => {
    const res = await axios.post('http://localhost:5000/api/auth/register', {
      emailOrPhone,
      password,
      role,
    });
    localStorage.setItem('token', res.data.token);
    setUser({ role: res.data.role });
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
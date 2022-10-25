import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [userInfo, setUserInfo] = useState({});
  const [isLoanding, setIsLoanding] = useState(false);

  const login = (username, password) => {
    setIsLoanding(true);

    axios.post(`https://siglo-xxi-authorizations.azurewebsites.net/Authorizations/v1/login`, {
      username,
      password,
    }).then(res => {
      let userInfo = res.data;
      setUserInfo(userInfo);
      AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      setIsLoanding(false);
    }).catch(e => {
      console.log(`login error ${e}`);
      setIsLoanding(false)
    });
  }

  const logout = () => {
    try {
      AsyncStorage.removeItem('userInfo');
    } catch (error) {
      console.log(`logout error ${e}`);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoanding,
        userInfo,
        login,
        logout
      }}>
      {children}
    </AuthContext.Provider>
  );
};
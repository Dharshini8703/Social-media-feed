import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import useAxiosInterceptor from './Interceptor';

const Context = createContext(undefined);

export const useContextData = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useContextData must be used within a ContextProvider');
  }
  return context;
};

export const ContextProvider = ({ children }) => {

  const [userData, setUserData] = useState([]);

  const { axbe } = useAxiosInterceptor();
  
  const addUserRegister = async(body) => {
    try{
      const res = await axbe.post('/api/users/register-user', body);
      return res;
    } catch(error) {
      throw error;
    }
  }

  const loginUser = async(body) => {
    try{
      const res = await axbe.post('/api/users/login-user', body);
      return res;
    } catch(error) {
      throw error;
    }
  }

  const value = {
    userData, addUserRegister, loginUser,
  };



  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

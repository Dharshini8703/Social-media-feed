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
  const userRegister = async(body) => {
    try{

    } catch(error) {

    }
  }

  const value = {
    userData,
  };



  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

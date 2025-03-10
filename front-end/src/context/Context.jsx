import React, { createContext, useContext } from 'react';
import { destinationsData } from '../data/destinations';

const Context = createContext(undefined);

export const useContextData = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useContextData must be used within a DestinationsProvider');
  }
  return context;
};

export const DestinationsProvider = ({ children }) => {
  // Extract unique categories
  const categories = Array.from(new Set(destinationsData.map(dest => dest.category)));

  const getDestinationById = (id) => {
    return destinationsData.find(dest => dest.id === id) || null;
  };

  const value = {
    destinations: destinationsData,
    categories,
    getDestinationById,
  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

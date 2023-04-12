import React, { createContext, useState } from 'react';

import { getCategories } from '../services/categoriesApi';
import { getTraining } from '../services/trainingApi';
import { trainingProps } from '../types/trainingProps';

interface MainDataProps {
  setTraining: any;
  typesTrainingSelected: any;
  setTypesTrainingSelected: any;
  training: trainingProps[];
  handleGetDataTraining: () => any;
  handleGetTypesTraining: () => any;
  typesTraining: any;
}

interface MainProviderProps {
  children: React.ReactNode;
}

export const MainContext = createContext({} as MainDataProps);

export function MainProvider({ children }: MainProviderProps) {
  const [training, setTraining] = useState([]);
  const [typesTraining, setTypesTraining] = useState([]);
  const [typesTrainingSelected, setTypesTrainingSelected] = useState();

  const handleGetDataTraining = async () => {
    const dataTraining = await getTraining();
    setTraining(dataTraining);
  }

  const handleGetTypesTraining = async () => {
    const data = await getCategories();
    setTypesTrainingSelected(data[0]._id)
    setTypesTraining(data);
  }

  return (
    <MainContext.Provider
      value={{
        setTraining,
        training,
        handleGetDataTraining,
        typesTraining,
        handleGetTypesTraining,
        setTypesTrainingSelected,
        typesTrainingSelected
      }}>
      {children}
    </MainContext.Provider>
  );
}

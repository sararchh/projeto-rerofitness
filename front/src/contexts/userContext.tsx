import React, { createContext, useEffect, useState } from 'react';

interface UserDataProps {
  token: string,
  userData: any,
  setToken: any,
  setUserData: any,
}

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserContext = createContext({} as UserDataProps);


export function UserProvider({ children }: UserProviderProps) {
  const [token, setToken] = useState('');
  const [userData, setUserData] = useState("");

  useEffect(() => {
    if (typeof window !== undefined) {
      const getToken = localStorage.getItem('token');
      const getUserData = localStorage.getItem('userData');
      setToken(getToken ? getToken : "");
      setUserData(getUserData ? JSON.parse(getUserData) : "");
    }
  }, [])

  return (
    <UserContext.Provider
      value={{
        token,
        setToken,
        userData,
        setUserData
      }}>
      {children}
    </UserContext.Provider>
  );
}

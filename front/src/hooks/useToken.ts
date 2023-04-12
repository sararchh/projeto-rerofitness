import { useContext } from 'react';
import { UserContext } from '../contexts/userContext';

export default function useToken() {
  const { token } = useContext(UserContext);
  
  return token;
}

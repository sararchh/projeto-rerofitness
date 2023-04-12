import { useContext } from 'react';
import { UserContext } from '../contexts/userContext';

export default function useUserData() {
  const { userData } = useContext(UserContext);

  return userData;
}

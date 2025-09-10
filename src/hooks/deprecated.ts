import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { useUser } from '../auth/hooks';

export function useAuthDeprecated() {
  const context = useContext(AuthContext);
  const user = useUser();
  
  if (!context) {
    // Return a default state when AuthContext is not available
    return {
      user: null,
      isLoading: false
    };
  }

  const { auth } = context;
  
  // If auth is undefined (still loading), return loading state
  if (typeof auth === 'undefined') {
    return {
      user: null,
      isLoading: true
    };
  }

  // If auth is false (error state), return not loading with no user
  if (auth === false) {
    return {
      user: null,
      isLoading: false
    };
  }

  return {
    user,
    isLoading: false
  };
}
import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext({});

// mock data session
const mockSession = {
  user: {
    name: 'John Doe',
    email: 'cuadrosc99@gmail.com'
  }
}

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Check if there's a session in local storage or cookies
    const storedSession = localStorage.getItem('session');
    if (storedSession) {
      setSession(JSON.parse(storedSession));
    }
  }, [session]);

  const login = async (username, password) => {
    // Simulate a login request
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      setSession(data.session);
    } else {
      throw new Error('Login failed');
    }
  };

  const logout = async () => {
    // Simulate a logout request
    const response = await fetch('/api/logout', {
      method: 'POST',
    });

    if (response.ok) {
      setSession(null);
    } else {
      throw new Error('Logout failed');
    }
  };

  const isAuthenticated = () => {
    return session !== null;
  };

  const getSession = () => {
    return session;
  };

  const getUser = () => {
    return session ? session.user : null;
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        isAuthenticated,
        getSession,
        getUser,
        session,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;

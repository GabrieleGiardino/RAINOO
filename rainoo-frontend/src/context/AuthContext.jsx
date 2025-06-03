import { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
    console.log('🔑 Utente loggato:', userData);
  };

  const updateUser = (updatedData) => {
    setUser((prev) => ({ ...prev, ...updatedData }));
    console.log('🖼️ Utente aggiornato:', updatedData);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    console.log('🚪 Logout eseguito');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  role: 'freelancer' | 'client' | 'admin';
  email: string;
  profile?: {
    bio?: string;
    mobileMoneyNumber?: string;
    bankAccountNumber?: string;
    nationalIdUrl?: string;
    verificationStatus?: 'pending' | 'verified' | 'rejected';
    location?: string;
  };
  jobsPosted?: any[];
  proposals?: any[];
  contracts?: any[];
  reviews?: any[];
  createdAt: string;
  lastLogin?: string;
}

interface UserContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthenticated: boolean;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = user !== null;

  return (
    <UserContext.Provider value={{ user, setUser, isAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

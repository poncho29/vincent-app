'use client';

import { createContext} from 'react';

import { UserLogin } from '@/interfaces';

export interface AuthContextProps {
  user: UserLogin | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

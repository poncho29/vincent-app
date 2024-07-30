'use client';

import { useContext, useState, ReactNode, useEffect } from 'react';

import { usePathname, useRouter } from 'next/navigation';

import Cookies from 'js-cookie';

import { checkToken, login as loginAction } from '@/actions';

import { AuthContext, AuthContextProps } from './AuthContext';

import { UserLogin } from '@/interfaces';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [user, setUser] = useState<UserLogin | null>(null);

  useEffect(() => {
    const storedUser = Cookies.get('user');
    
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  useEffect(() => {
    if (!user) {
      Cookies.remove('user');
      return;
    }

    Cookies.set('user', JSON.stringify(user), { path: '/' });
  }, [user]);


  useEffect(() => {
    if (pathname === '/auth/login') return;

    const validateToken = async () => {
      const authToken = Cookies.get('authToken');
      const tokenTimestamp = Cookies.get('tokenTimestamp');

      if (!authToken || !tokenTimestamp) {
        logout();
        return;
      }
  
      const tokenAge = Date.now() - parseInt(tokenTimestamp);
      const tokenExpiryTime = 2 * 60 * 60 * 1000; // 2 horas en milisegundos

      if (tokenAge >= tokenExpiryTime - 60 * 1000) { // Si falta un minuto o menos
        try {
          const data = await checkToken(authToken);
          setUser(data);
          Cookies.set('authToken', data.token, { path: '/' });
          Cookies.set('tokenTimestamp', Date.now().toString(), { path: '/' });
        } catch (error) {
          logout();
        }
      }
    };

    validateToken();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const login = async (email: string, password: string) => {
    const response = await loginAction({ email, password });

    if (response.success && response.user) {
      setUser(response.user);
      Cookies.set('authToken', response.user.token, { path: '/' });
      Cookies.set('tokenTimestamp', Date.now().toString(), { path: '/' });
      router.push('/admin');
    } else {
      throw new Error(response.message);
    }
  };

  const logout = () => {
    setUser(null);
    Cookies.remove('authToken');
    Cookies.remove('tokenTimestamp');
    router.push('/auth/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
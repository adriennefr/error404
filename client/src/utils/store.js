import {createContext, useContext } from 'react';

export const WODContext = createContext([])
export const AuthContext = createContext({});

export function useAuth() {
  return useContext(AuthContext);
}

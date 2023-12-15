import { create } from 'zustand';

interface AuthState {
  access: string | null;
  refresh: string | null;
  isAuthenticated: boolean | null;
  user: string | null;

  login: () => void;
  logout: () => void;
  loadUser: () => void;
  checkAuthenticated: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  access: localStorage.getItem('access'),
  refresh: localStorage.getItem('refresh'),
  isAuthenticated: null,
  user: null,

  login: () =>
    set(() => {
      console.log('yay!');

      return {
        access: 'access',
        refresh: 'refresh',
        isAuthenticated: true,
        user: 'mike',
      };
    }),
  logout: () =>
    set(() => {
      console.log('yay!');

      return {
        access: 'access',
        refresh: 'refresh',
        isAuthenticated: true,
        user: 'mike',
      };
    }),
  loadUser: () =>
    set(() => {
      console.log('yay!');

      return {
        access: 'access',
        refresh: 'refresh',
        isAuthenticated: true,
        user: 'mike',
      };
    }),
  checkAuthenticated: () =>
    set(() => {
      console.log('yay!');

      return {
        access: 'access',
        refresh: 'refresh',
        isAuthenticated: true,
        user: 'mike',
      };
    }),
}));

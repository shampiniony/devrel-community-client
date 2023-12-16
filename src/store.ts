import axios from 'axios';
import { create } from 'zustand';

interface AuthState {
  access: string | null;
  refresh: string | null;
  isAuthenticated: boolean | null;
  user: string | null;

  login: (username: string, password: string) => void;
  logout: () => void;
  loadUser: () => void;
  verifyAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  access: localStorage.getItem('access'),
  refresh: localStorage.getItem('refresh'),
  isAuthenticated: null,
  user: null,

  login: async (username: string, password: string) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({ username, password });

    console.log(body)

    const res = await axios.post(
      `http://0.0.0.0/api/auth/token/login`,
      body,
      config
    );

    set(() => {
      console.log(res);

      return {
        access: 'access',
        refresh: 'refresh',
        isAuthenticated: true,
        user: 'mike',
      };
    });
  },
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
  verifyAuth: () =>
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

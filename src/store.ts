import { IUser } from 'types/MailingTypes';
import { create } from 'zustand';

// interface AuthState {
//   access: string | null;
//   refresh: string | null;
//   isAuthenticated: boolean | null;
//   user: string | null;

//   login: (username: string, password: string) => void;
//   logout: () => void;
//   loadUser: () => void;
//   verifyAuth: () => void;
// }

interface MailingState {
  selected_users: IUser[];
  setSelectedUsers: (users: IUser[]) => void;
}

// export const useAuthStore = create<AuthState>((set) => ({
//   access: localStorage.getItem('access'),
//   refresh: localStorage.getItem('refresh'),
//   isAuthenticated: true,
//   user: 'mike',

//   login: async (username: string, password: string) => {
//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };

//     const body = JSON.stringify({ username, password });

//     set(() => {
//       // console.log(res);

//       return {
//         access: 'access',
//         refresh: 'refresh',
//         isAuthenticated: true,
//         user: 'mike',
//       };
//     });
//   },
//   logout: () =>
//     set(() => {
//       return {
//         access: 'access',
//         refresh: 'refresh',
//         isAuthenticated: false,
//         user: 'mike',
//       };
//     }),
//   loadUser: () =>
//     set(() => {
//       console.log('yay!');

//       return {
//         access: 'access',
//         refresh: 'refresh',
//         isAuthenticated: true,
//         user: 'mike',
//       };
//     }),
//   verifyAuth: () =>
//     set(() => {
//       return {
//         access: 'access',
//         refresh: 'refresh',
//         isAuthenticated: true,
//         user: 'mike',
//       };
//     }),
// }));

export const useMailingStore = create<MailingState>((set) => ({
  selected_users: [],
  setSelectedUsers: (selected_users) =>
    set(() => {
      console.log(selected_users)
      return {
        selected_users: selected_users,
      };
    }),
}));

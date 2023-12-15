import { useAuthStore } from './../store.ts';

export const Login = () => {
  const login = useAuthStore((state: { login: any }) => state.login);

  return (
    <>
      <h1
        onClick={() => {
          login();
        }}
      >
        Login
      </h1>
    </>
  );
};

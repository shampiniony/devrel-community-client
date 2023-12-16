import { useAuthStore } from './../store.ts';

export const Login = () => {
  const login = useAuthStore((state: { login: any }) => state.login); 

  return (
    <>
      <h1
        onClick={() => {
          login("vania", "vania2010");
        }}
      >
        Login
      </h1>
    </>
  );
};

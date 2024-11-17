import { createFileRoute, redirect } from '@tanstack/react-router';
import Login from './login.lazy';

export const Route = createFileRoute('/')({
  beforeLoad: async ({ context }: any) => {
    const { isAuthenticated } = context.auth;
    if (!isAuthenticated()) {
      throw redirect({
        to: '/login'
      });
    } else {
      throw redirect({
        to: '/main'
      });
    }
  },
  component: Login
});

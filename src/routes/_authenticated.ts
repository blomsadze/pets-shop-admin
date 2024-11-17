import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: async ({ context }: any) => {
    const { isAuthenticated } = context.auth;
    if (!isAuthenticated()) {
      throw redirect({
        to: '/login'
      });
    }
  }
});

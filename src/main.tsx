import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { ToastContainer } from 'react-toastify';
import { routeTree } from './routeTree.gen';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import queryClient from './config/queryClient.config';

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {
    auth: undefined!
  },
  defaultNotFoundComponent: () => {
    return <div>404 Not Found</div>;
  }
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const isAuthenticated = () => !!localStorage.getItem('token') || false;

const rootElement = document.getElementById('root')!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider
          router={router}
          context={{ auth: { isAuthenticated } }}
        />
        <ToastContainer position="top-center" autoClose={2000} />
      </QueryClientProvider>
    </StrictMode>
  );
}

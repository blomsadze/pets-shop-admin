import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_protected/products')({
  component: RouteComponent
});

function RouteComponent() {
  return 'Hello /protected/products!';
}

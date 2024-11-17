import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_protected/main')({
  component: RouteComponent
});

function RouteComponent() {
  return <h1>Main Page Main</h1>;
}

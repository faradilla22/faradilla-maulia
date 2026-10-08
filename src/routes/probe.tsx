import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/probe")({
  loader: () => ({ item: "hello" }),
  component: ProbePage,
});

function ProbePage() {
  const { item } = Route.useLoaderData();
  return <div>{item}</div>;
}

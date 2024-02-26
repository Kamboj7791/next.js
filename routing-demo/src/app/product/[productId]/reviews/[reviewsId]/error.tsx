"use client";
export default function ErrorBoundaries({ error }: { error: Error }) {
  return <div>{error.message}</div>;
}

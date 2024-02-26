"use client";
export default function ErrorBoundaries({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      {error.message}
      <button onClick={reset}>try again</button>
    </div>
  );
}

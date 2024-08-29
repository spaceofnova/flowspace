"use client";
import { useState } from "react";

type Error = {
  message: string;
  type?: string | number;
};

export default function Settings() {
  const [error, setError] = useState<Error | null>({
    message: "Not done, fuck you im working on it",
    type: "404 Not Found",
  });
  return (
    <div className="mx-auto flex max-w-screen-2xl flex-col p-4">
      <h1 className="mb-4 text-4xl font-bold">Settings</h1>
      {error && <p className="text-red-500">ERROR</p>}
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </div>
  );
}

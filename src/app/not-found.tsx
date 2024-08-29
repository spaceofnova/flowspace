"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="w-screen">
      <div className="flex flex-col items-center justify-center gap-4 p-2 w-full h-full">
        <h1 className="text-4xl font-bold">404???</h1>
        <p className="text-xl">
          The page you are looking for doesn{"'"}t exist 🤷
        </p>
        <Button onClick={() => router.back()}>Go Back!!</Button>
      </div>
    </main>
  );
}

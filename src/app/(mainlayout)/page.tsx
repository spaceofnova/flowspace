export const metadata = {
  title: "Home - Flowspace",
  description: "The home page of Flowspace.",
};

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-4">
      <h1 className="text-center text-4xl font-bold">Home is unfinished 😔</h1>

      {/* Kofi */}
      <a
        href="https://ko-fi.com/spaceofnova"
        target="_blank"
        rel="noopener noreferrer"
        className="relative max-w-80"
      >
        <img
          src="https://storage.ko-fi.com/cdn/kofi3.png?v=3"
          alt="Buy Me a Coffee"
        />
      </a>

      {process.env.NODE_ENV === "development" && (
        <p className="fixed right-0 bottom-0 rounded-md p-2 font-bold text-gray-200 dark:text-gray-800">
          DEBUG
        </p>
      )}
    </main>
  );
}

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-4">
      <h1 className="text-center text-4xl font-bold">
        Home is unfinished 😔 <br /> pay me {">:3"}
      </h1>

      <iframe
        id="kofiframe"
        src="https://ko-fi.com/spaceofnova/?hidefeed=true&widget=true&embed=true&preview=true"
        height={560}
        style={{ border: "none", overflow: "hidden", borderRadius: "8px" }}
        title="spaceofnova"
      ></iframe>
      {process.env.NODE_ENV === "development" && (
        <p className="fixed bottom-0 right-0 rounded-md p-2 font-bold text-gray-200 dark:text-gray-800">
          DEBUG
        </p>
      )}
    </main>
  );
}

export const metadata = {
  title: "Request a Game - Flowspace",
  description: "Request a game to be added to Flowspace.",
};

export default async function Page() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdGj3Sy84lX4cznn9mFOWVWmp6l6l61LmC7ZEFGzGhJVH4xmw/viewform?embedded=true"
        width="700"
        height="100%"
        style={{
          border: "none",
          margin: "none",
          borderRadius: "0.5rem",
        }}
      >
        Loading…
      </iframe>
    </div>
  );
}

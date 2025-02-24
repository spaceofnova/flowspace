export const metadata = {
  title: "Settings - Flowspace",
  description: "Settings for Flowspace.",
};

export default function Settings() {
  const error = {
    message: "Almost done!",
    type: "404 Not Found",
  };
  return (
    <div>
      <h1 className="mb-4 text-4xl font-bold">Settings</h1>
      {error && <p className="text-red-500">ERROR</p>}
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </div>
  );
}

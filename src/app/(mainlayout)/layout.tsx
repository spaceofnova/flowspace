import Nav from "@/components/Nav";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex min-h-screen w-screen flex-col">
      <Nav />
      <div className="flex flex-1 justify-center overflow-y-auto pt-10">
        <div className="w-full max-w-screen-2xl p-4">{children}</div>
      </div>
    </main>
  );
}

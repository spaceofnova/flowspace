import Nav from "@/components/Nav";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen w-screen flex-col">
      <Nav />
      <div className="flex-1 overflow-auto">{children}</div>
    </main>
  );
}

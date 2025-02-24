import { createClient } from "@/utils/supabase/client";
import AppPlaque from "@/components/AppPlaque";

export const metadata = {
  title: "Apps - Flowspace",
  description: "Browse all the apps available on Flowspace.",
};

// Make this a Server Component that fetches data at build time
export default async function Apps() {
  const supabase = createClient();
  const { data: games, error } = await supabase
    .from("games")
    .select("id, name, img")
    .order("name");

  if (error) {
    console.error("Error fetching games:", error.message);
    return (
      <main className="mx-auto max-w-screen-2xl p-4">
        <h1 className="mb-4 text-4xl font-bold">Apps</h1>
        <p className="text-red-500">
          Failed to load games. Please try again later.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-screen-2xl">
      <h1 className="mb-4 text-4xl font-bold">Apps</h1>
      <div className="flex flex-wrap gap-4">
        {games?.length ? (
          games.map((game) => <AppPlaque app={game} key={game.id} />)
        ) : (
          <p className="text-gray-500">No games available.</p>
        )}
      </div>
    </main>
  );
}

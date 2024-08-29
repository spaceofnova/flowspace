import { createClient } from "@/utils/supabase/client";
import AppPlaque from "@/components/AppPlaque";
export default async function Apps() {
  const supabase = createClient();
  const { data: games } = await supabase
    .from("games")
    .select("id, name, img")
    .order("name");

  return (
    <main className="mx-auto max-w-screen-2xl p-4">
      <h1 className="mb-4 text-4xl font-bold">Apps</h1>
      <div className="flex flex-wrap gap-4">
        {games?.map((game) => <AppPlaque app={game} key={game.id} />)}
      </div>
    </main>
  );
}

import { createClient } from "@/utils/supabase/client";
import Iframe from "react-iframe";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const title =
    params.id === "demo" ? "Demo - Flowspace" : await fetchGameTitle(params.id);
  return { title };
}

async function fetchGameTitle(id: string): Promise<string> {
  const { data: game } = await createClient()
    .from("games")
    .select("name")
    .match({ id })
    .single();

  return game?.name || "Game Not Found";
}

export default async function Page({ params }: { params: { id: string } }) {
  if (params.id === "demo") {
    return (
      <div className="flex h-full w-full flex-col">
        <Iframe
          className="h-full overflow-hidden rounded-md"
          url="https://example.com"
        />
      </div>
    );
  }

  const { data: game } = await createClient()
    .from("games")
    .select("id, name, url")
    .match({ id: params.id })
    .single();

  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <div className="flex h-full w-full flex-col">
      <Iframe className="h-full overflow-hidden rounded-md" url={game.url} />
    </div>
  );
}

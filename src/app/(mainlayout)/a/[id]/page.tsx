import { createClient } from "@/utils/supabase/client";
import Iframe from "react-iframe";

export default async function Page({ params }: { params: { id: string } }) {
  const { data: game } = await createClient()
    .from("games")
    .select("*")
    .match({ id: params.id })
    .single();

  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <div className="w-full h-full flex flex-col">
      <div className="h-16 flex justify-center items-center">
        <h1 className="text-2xl font-bold">{game.name}</h1>
      </div>
      <Iframe
        className="h-full p-4 rounded-md overflow-hidden"
        url={game.url}
      />
    </div>
  );
}

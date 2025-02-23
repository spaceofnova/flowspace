"use client";
import { createClient } from "./supabase/client";

type game = {
  name: string;
  id: string;
};

export const indexGames = async () => {
  if (typeof window === "undefined") return;
  let games: game[] = [];

  const supabase = createClient();

  await supabase
    .from("games")
    .select("name, id")
    .then((response: any) => {
      if (response.data) {
        games = response.data.map((game: game) => ({
          name: game.name,
          url: "/a/" + game.id.slice(-36),
        }));
      }
    });

  return localStorage.setItem("gameData", JSON.stringify(games));
};

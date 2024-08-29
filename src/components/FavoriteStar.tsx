"use client";
import { broadcast } from "@/utils/functions";
import { useIsClient, useLocalStorage } from "@uidotdev/usehooks";
import { LucideStar } from "lucide-react";

const FavoriteStar = ({ id }: { id: string }) => {
  const isClient = useIsClient();
  const [Favorites, setFavorites] = useLocalStorage<string[]>(
    "favoriteApps",
    []
  );

  const isFavorite = (appID: string) => Favorites.includes(appID);

  const addFavorite = (appID: string) => {
    if (!isClient) return;
    if (Favorites.length >= 6)
      return alert("Having more than 6 favorites is a supporter-only feature");
    setFavorites([...Favorites, appID]);
    broadcast("favoriteApps", "update");
  };

  const removeFavorite = (appID: string) => {
    if (!isClient) return;
    setFavorites(Favorites.filter((id) => id !== appID));
    broadcast("favoriteApps", "update");
  };
  if (!isClient) return null;
  return isFavorite(id) ? (
    <div onClick={() => removeFavorite(id)}>
      <LucideStar fill="gold" stroke="gold" />
    </div>
  ) : (
    <div onClick={() => addFavorite(id)}>
      <LucideStar />
    </div>
  );
};

export default FavoriteStar;

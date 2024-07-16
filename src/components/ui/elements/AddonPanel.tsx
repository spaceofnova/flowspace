import { installAddon, uninstallAddon } from "@/utils/addons/functions";
import { Download, LoaderCircle, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "../badge";

type Item = {
  id: string;
  name: string;
  desc: string;
  author: string;
  type: string;
};

export default function AddonPanel({ item }: { item: Item }) {
  const [isInstalled, setIsInstalled] = useState(false);
  const [installing, setInstalling] = useState(false);
  const [needsReload, setNeedsReload] = useState(false);

  useEffect(() => {
    const currentlyInstalledAddons = localStorage.getItem("installedAddons");
    if (currentlyInstalledAddons) {
      const installedAddons = JSON.parse(currentlyInstalledAddons);
      setIsInstalled(installedAddons.includes(item.id));
    }
  }, [item]);

  const installAddonClick = async (itemId: string) => {
    setInstalling(true);
    setTimeout(() => {
      installAddon(itemId);
      setIsInstalled(true);
      setInstalling(false);
      setNeedsReload(true);
    }, 400);
  };

  const uninstallAddonClick = async (itemId: string) => {
    setInstalling(true);
    setTimeout(() => {
      uninstallAddon(itemId);
      setIsInstalled(false);
      setInstalling(false);
      setNeedsReload(true);
    }, 400);
  };

  return (
    <div className="w-72 h-32 bg-background rounded-xl flex flex-col p-2 relative animate-fade-in">
      <div
        className="absolute top-2 right-2 p-2 h-10 w-10 bg-accent rounded-lg cursor-pointer"
        onClick={() =>
          isInstalled
            ? uninstallAddonClick(item.id)
            : installAddonClick(item.id)
        }
      >
        {installing ? (
          <div className="flex flex-col items-center justify-center">
            <LoaderCircle className="animate-spin h-6 w-6" />
          </div>
        ) : isInstalled ? (
          <Trash strokeWidth={1.5} className="w-full h-full" />
        ) : (
          <Download strokeWidth={1.5} className="w-full h-full" />
        )}
      </div>
      <h1 className="text-xl font-bold flex items-center gap-2">
        {item.name}

        {item.type === "script" && <Badge variant="secondary">Script</Badge>}
        {item.type === "style" && <Badge variant="secondary">Style</Badge>}
        {item.type === "hybrid" && (
          <Badge variant="secondary">Script + Style</Badge>
        )}
      </h1>
      <p>
        by:{" "}
        <Link
          to={"/web/users/" + item.author}
          className="hover:underline text-blue-400"
        >
          {item.author}
        </Link>
      </p>
      <p className="text-sm mt-2">{item.desc}</p>
      {needsReload && (
        <div className="w-full absolute -bottom-4 left-0 bg-destructive rounded-b-xl text-center">
          Reload page to apply changes
        </div>
      )}
    </div>
  );
}

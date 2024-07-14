import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import supabase from "../utils/supabase";
import { Button, buttonVariants } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

function create(url: string) {
  const win = window.open() || window;
  win.document.body.style.margin = "0";
  win.document.body.style.height = "100vh";
  const iframe = win.document.createElement("iframe");
  iframe.style.border = "none";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.margin = "0";
  iframe.src = url;
  const title = document.createElement("title");
  title.innerText = "Google Classroom";
  win.document.head.appendChild(title);
  win.document.body.appendChild(iframe);
}

interface GameInfo {
  name: string;
  url: string;
}

export default function AppPlayer() {
  const { id: appId } = useParams();
  const [gameInfo, setGameInfo] = useState<GameInfo | undefined>(undefined);
  useEffect(() => {
    const loadGame = async () => {
      const { data: gameinfo, error } = await supabase()
        .from("games")
        .select("url, name")
        .eq("id", appId) // Filter by the ID
        .single(); // Fetch a single row

      if (error) {
        console.log(error);
      } else {
        setGameInfo(gameinfo);
      }
    };
    loadGame();
  }, [appId]);

  const reloadGame = () => {
    (document.getElementById("gameFrame") as HTMLIFrameElement).src =
      gameInfo?.url || "unknown";
  };

  return (
    <div className="flex flex-col h-[calc(100%-2rem)] w-[calc(100%-2rem)] rounded-xl border-accent border-2 overflow-y-auto bg-background p-2 m-auto">
      <div className="flex w-full justify-between py-2 px-0 pt-0">
        <Link
          onClick={() => {}}
          className={buttonVariants({ variant: "destructive" })}
          to="/web/apps"
        >
          Leave Game
        </Link>
        <h1 className="text-3xl font-bold">{gameInfo?.name}</h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={reloadGame}>
            Reload Game
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              create(gameInfo?.url || "");
            }}
          >
            <ExternalLink strokeWidth={1.5} className="w-full h-full" />
          </Button>
        </div>
      </div>
      <iframe
        src={gameInfo?.url}
        className="z-[2] opacity-0 rounded-lg h-full transition-opacity duration-200 ease-linear text-text"
        title="Game"
        id="gameFrame"
        onLoad={() => {
          (
            document.getElementById("gameFrame") as HTMLIFrameElement
          ).style.opacity = "100";
          (document.getElementById("gameFrame") as HTMLIFrameElement).focus();
        }}
      ></iframe>
    </div>
  );
}

import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { useOutletContext, Link } from "react-router-dom";

interface Item {
  id: string;
  name: string;
  img: string;
}

export default function Home() {
  const [recentItems, setRecentItems] = useState<Item[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRecentItems(JSON.parse(localStorage.getItem("recentItems") || "[]"));
    }
  }, []);
  const user: User = useOutletContext();

  const currentHour = new Date().getHours();
  const greeting =
    currentHour >= 5 && currentHour < 12
      ? "Good Morning"
      : currentHour >= 12 && currentHour < 18
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <>
      <div className="flex flex-col justify-between h-full content">
        <div>
          <h1 className="text-4xl font-bold flex gap-2 items-center">
            {greeting +
              ", " +
              (user?.user_metadata.first_name ||
                user?.user_metadata.display_name) +
              "!"}
          </h1>
        </div>
        <div>
          <h2 className="text-3xl font-bold flex ml-2">Jump back in</h2>
          {recentItems.length > 0 ? (
            <div className="flex gap-4">
              {recentItems.map((item: Item) => (
                <Link
                  key={item.id}
                  className="w-52 bg-base-100 shadow-xl bg-background rounded-xl flex flex-col justify-between"
                  to={"/web/apps/" + item.id}
                >
                  <figure className="pt-2 px-2">
                    <img
                      src={item.img}
                      alt="Shoes"
                      className="rounded-lg aspect-video object-cover"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h5 className="card-title">{item.name}</h5>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="ml-2 mb-2">
              Play some games and they'll appear here!
            </p>
          )}
        </div>
      </div>
    </>
  );
}

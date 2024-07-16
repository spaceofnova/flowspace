import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../utils/supabase";
import { Input } from "@/components/ui/input";
import { Img } from "react-image";

interface App {
  id: string;
  name: string;
  img: string;
  url: string;
}

interface event {
  target: {
    value: string;
  };
}

export default function Apps() {
  const [items, setItems] = useState<App[]>([]);
  const [filteredItems, setFilteredItems] = useState<App[]>([]);

  const filterItems = async (event: event) => {
    const searchTerm = event.target.value.toLowerCase();
    setFilteredItems(
      searchTerm
        ? items?.filter((item: App) =>
            item.name.toLowerCase().includes(searchTerm)
          )
        : items
    );
  };

  useEffect(() => {
    const loadItems = async () => {
      const { data: items, error } = await supabase()
        .from("games")
        .select("id, name, img, url")
        .limit(100)
        .order("name", { ascending: true });
      if (error) console.error("Error loading items:", error);
      else {
        setItems(items);
        setFilteredItems(items);
      }
    };

    loadItems();
  }, []);
  return (
    <div className="grid content">
      <div className="flex w-full gap-4">
        <Input
          type="search"
          name="items_search"
          placeholder="Search Items.."
          className="w-full "
          autoComplete="off"
          onChange={filterItems}
        />
      </div>
      <div className="flex gap-4 flex-wrap p-6 h-full w-full mx-auto md:w-full">
        {filteredItems?.map((item: App) => (
          <Link
            className="h-24 w-60 bg-background flex relative cursor-pointer overflow-hidden rounded-xl p-2 animate-up hover:bg-accent transition-colors border-2 border-accent hover:border-white/10"
            to={`/web/apps/${item.id}`}
            key={item.id}
          >
            <Img
              src={item.img}
              alt="Item"
              className="w-20 rounded-lg object-cover aspect-square"
            />
            <div>
              <h1 className="font-bold ml-2">{item.name}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

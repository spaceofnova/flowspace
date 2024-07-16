import { Badge } from "@/components/ui/badge";
import AddonPanel from "@/components/ui/elements/AddonPanel";
import supabase from "@/utils/supabase";
import { useEffect, useState } from "react";

type Item = {
  id: string;
  name: string;
  desc: string;
  author: string;
  type: string;
};

export default function Store() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const loadItems = async () => {
      const { data: addons, error } = await supabase()
        .from("addons")
        .select("id, name, desc, author, type");
      if (error) {
        console.error(error);
        return;
      }
      setItems(addons);
    };

    loadItems();
  }, []);

  return (
    <div className="Store content">
      <h1 className="text-4xl font-bold relative w-fit">
        Store
        <Badge variant="destructive" className="absolute -top-0 -right-12">
          Beta
        </Badge>
      </h1>
      <div className="mt-2 flex flex-wrap gap-4">
        {items.map((item: Item) => (
          <AddonPanel item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

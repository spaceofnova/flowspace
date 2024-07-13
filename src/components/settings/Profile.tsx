import { User } from "@supabase/supabase-js";
import supabase from "../../utils/supabase";
import { useOutletContext } from "react-router-dom";
import Div from "../ui/elements/Div";
import { buttonVariants } from "@/components/ui/button";
import { toast } from "sonner";

import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function Profile() {
  const user = useOutletContext<User>();

  const handleSave = async () => {
    const display_name = (
      document.querySelector('input[name="display_name"]') as HTMLInputElement
    ).value;

    const bio = (
      document.querySelector('textarea[name="bioText"]') as HTMLInputElement
    ).value;

    const { error } = await supabase().auth.updateUser({
      data: {
        display_name: display_name.toString(),
        bio: bio.toString(),
      },
    });
    if (error) {
      console.log(error);
      toast.error("Could not update profile");
    }

    toast.success("Profile Updated!", {
      duration: 1500,
      action: {
        label: "Close",
        onClick: () => {},
      },
    });
  };

  return (
    <>
      <div className="flex flex-row w-full h-full gap-0">
        <Div className="rounded-md w-80 h-full p-2 flex flex-col bg-primary/10">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 w-full h-24 bg-primary/10 rounded-md relative mb-4">
              <img
                referrerPolicy="no-referrer"
                src={user?.user_metadata?.avatar_url}
                alt="Avatar"
                className="w-16 h-16 rounded-full absolute -bottom-4 left-4"
              />
            </div>
            <h1 className="text-2xl">{user?.user_metadata?.display_name}</h1>
            <p className="opacity-50">@{user?.user_metadata?.username}</p>
            <div className="form-control">
              <label className="label">Bio</label>
              <div id="bioText" className="bg-white/10 p-2 rounded-md w-full">
                {user?.user_metadata?.bio ?? "No bio yet.. Add one!"}
              </div>
            </div>
          </div>
        </Div>
        <Div className="rounded-md w-4/12 p-2 flex flex-col gap-2 border-accent border-2 ml-2">
          <h1 className="text-2xl">Edit Profile</h1>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <label className="label">Display Name</label>
              <Input
                type="text"
                name="display_name"
                defaultValue={user?.user_metadata?.display_name}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="label">Bio</label>
              <Textarea
                name="bioText"
                rows={15}
                defaultValue={user?.user_metadata?.bio}
                onKeyDown={(e) => {
                  if (
                    (e.key === "Enter" && e.ctrlKey) ||
                    (e.key === "s" && e.metaKey) ||
                    (e.key === "S" && e.metaKey) ||
                    (e.key === "s" && e.ctrlKey) ||
                    (e.key === "S" && e.ctrlKey)
                  ) {
                    e.preventDefault();
                    document.getElementById("save")?.click();
                  }
                }}
              />
            </div>
            <div className="card-actions w-full justify-end flex flex-col gap-2">
              <button
                id="save"
                className={buttonVariants({ variant: "default" })}
                onClick={handleSave}
              >
                Save Changes
              </button>
            </div>
          </div>
        </Div>
      </div>
    </>
  );
}

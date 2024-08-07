import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "./utils/supabase";
import Nav from "./components/ui/Nav";
import { User } from "@supabase/supabase-js";
import Wallpaper from "./components/ui/Wallpaper";
import UserSettingsProvider from "./components/providers/UserSettingsProvider";
import { Toaster } from "@/components/ui/sonner";
import Loader from "./components/ui/Loader";

function App() {
  const [user, setUser] = useState<User>();
  const navigate = useNavigate();

  useEffect(() => {
    supabase()
      .auth.getSession()
      .then(({ data: { session } }) => {
        setUser(session?.user);
      });

    const {
      data: { subscription },
    } = supabase().auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate("/auth/login");
      }
      setUser(session?.user);
    });

    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-screen h-screen text-text">
      <Loader />
      <UserSettingsProvider>
        <Nav />
        <div className="w-full h-[calc(100%-3rem)] md:w-[calc(100%-3rem)] md:h-full flex flex-col absolute top-0 right-0 p-2 overflow-y-auto overflow-x-hidden md:rounded-l-xl">
          <Outlet context={user} />
        </div>
        <Wallpaper />
      </UserSettingsProvider>
      <Toaster />
    </div>
  );
}

export default App;

import React from "react";
import Apperance from "../components/settings/Apperance";
import Profile from "../components/settings/Profile";
import Div from "../components/ui/elements/Div";
import { Button } from "@/components/ui/button";
import logOut from "@/utils/logout";
import { buttonVariants } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Settings() {
  const [page, setPage] = React.useState(0);
  const pages = [
    {
      id: 0,
      name: "My Profile",
      content: <Profile />,
    },
    {
      id: 1,
      name: "Look & Feel",
      content: <Apperance />,
    },
  ];
  return (
    <Div className="flex h-[calc(100%-4rem)] w-full md:w-[calc(100%-24rem)] mx-auto m-8 rounded-xl border-accent border-2 overflow-y-auto relative">
      <div className="flex flex-col gap-2 border-r-accent border-r-2 p-2 relative">
        <h1 className="text-4xl font-bold">Settings</h1>
        {pages.map((item) => (
          <Button
            variant={item.id == pages[page].id ? "default" : "outline"}
            key={item.id}
            className={"tab " + (item.id == pages[page].id ? "tab-active" : "")}
            onClick={() => {
              setPage(item.id);
            }}
          >
            {item.name}
          </Button>
        ))}
        <button
          className={
            buttonVariants({ variant: "destructive" }) +
            " absolute bottom-2 w-[calc(100%-1rem)]"
          }
          onClick={logOut}
        >
          <LogOutIcon strokeWidth={1.5} className="w-full h-full" />
        </button>
      </div>
      <div className="w-[calc(100%-1rem)] h-[calc(100%-1rem)] overflow-hidden relative m-2">
        <AnimatePresence initial={false}>
          {pages[page] ? (
            <motion.div
              key={pages[page].id}
              className="w-full h-full overflow-hidden absolute top-0 left-0"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.25 }}
            >
              {pages[page].content}
            </motion.div>
          ) : (
            <motion.div
              key={"404"}
              className="w-full h-full overflow-hidden absolute top-0 left-0"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.25 }}
            >
              Page Not Found
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Div>
  );
}

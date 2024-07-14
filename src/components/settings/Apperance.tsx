import Div from "../ui/elements/Div";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useTheme } from "@/components/providers/ThemeProvider";
import { AnimatePresence, motion } from "framer-motion";
import { useUserSettings } from "../contexts/UserSettingsContext";
export default function Apperance() {
  const { theme, setTheme } = useTheme();
  const { userSettings, updateValue } = useUserSettings();
  return (
    <Div className="flex flex-col p-2 rounded-md w-96 gap-2">
      <h1 className="text-4xl font-bold mb-12">Apperance</h1>
      <div className="border-2 border-accent rounded-sm flex flex-col gap-2 p-2">
        <h2 className="text-2xl font-bold">Colors</h2>
        <div className="flex items-center space-x-2">
          <Label htmlFor="system-switch">Match System?</Label>
          <Switch
            id="system-switch"
            checked={theme === "system"}
            onClick={() => setTheme(theme === "system" ? "dark" : "system")}
          />
        </div>
        <AnimatePresence initial={false}>
          {theme != "system" && (
            <motion.div
              className="flex gap-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
            >
              <button onClick={() => setTheme("light")} className="w-16 h-12">
                <p>Light</p>
              </button>
              <button onClick={() => setTheme("dark")} className="w-16 h-12">
                <p>Dark</p>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="border-2 border-accent rounded-sm flex flex-col gap-2 p-2">
        <h2 className="text-2xl font-bold">Other Settings</h2>
        <div className="flex items-center space-x-2">
          <Label htmlFor="new-page-transition">New Page Transitions?</Label>
          <Switch
            id="new-page-transition"
            checked={userSettings.newPageTransition}
            onClick={() =>
              updateValue("newPageTransition", !userSettings.newPageTransition)
            }
          />
        </div>
      </div>
    </Div>
  );
}

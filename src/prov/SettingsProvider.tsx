"use client";
import { useLocalStorage } from "@uidotdev/usehooks";
import React from "react";

export const SettingsContext = React.createContext<SettingsContextType>({
  settings: {},
  setSettings: () => {},
  updateSetting: () => {},
});

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useLocalStorage<Settings>("settings", {});

  const updateSetting = (key: keyof Settings, value: any) => {
    setSettings((settings) => ({ ...settings, [key]: value }));
  };
  return (
    <SettingsContext.Provider value={{ settings, setSettings, updateSetting }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = React.useContext(SettingsContext);

  if (context === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }

  return context;
}

type Settings = {
  developerMode?: boolean;
  favoriteApps?: string[];
};

type SettingsContextType = {
  settings: Settings;
  setSettings: (settings: Settings) => void;
  updateSetting: (key: keyof Settings, value: any) => void;
};

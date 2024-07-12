import { useContext } from "react";
import { UserSettingsContext } from "../contexts/UserSettingsContext";
import LightBackground from "./LightBackground";

export default function Wallpaper() {
  const { userSettings } = useContext(UserSettingsContext);
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      {userSettings.backgroundType === "image" ? (
        <img
          src={userSettings.wallaper?.url}
          alt="Wallpaper"
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full relative overflow-hidden hidden md:block">
          <LightBackground className="absolute w-full h-full opacity-35" />
        </div>
      )}
    </div>
  );
}

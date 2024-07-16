import supabase from "../supabase";
import { toast } from "sonner";

const installAddon = async (addonId: string) => {
  const currentlyInstalledAddons = localStorage.getItem("installedAddons");
  if (currentlyInstalledAddons) {
    const installedAddons = JSON.parse(currentlyInstalledAddons);
    if (installedAddons.includes(addonId)) {
      alert("Addon already installed");
      return;
    } else {
      installedAddons.push(addonId);
      localStorage.setItem("installedAddons", JSON.stringify(installedAddons));
    }
  } else {
    localStorage.setItem("installedAddons", JSON.stringify([addonId]));
  }

  console.log("Installed addons: ", localStorage.getItem("installedAddons"));
};

const uninstallAddon = async (addonId: string) => {
  const currentlyInstalledAddons = localStorage.getItem("installedAddons");
  if (currentlyInstalledAddons) {
    const installedAddons = JSON.parse(currentlyInstalledAddons);
    if (!installedAddons.includes(addonId)) {
      alert("Addon not installed");
      return;
    } else {
      installedAddons.splice(installedAddons.indexOf(addonId), 1);
      localStorage.setItem("installedAddons", JSON.stringify(installedAddons));
    }
  } else {
    localStorage.setItem("installedAddons", JSON.stringify([]));
  }

  console.log("Installed addons: ", localStorage.getItem("installedAddons"));
};

const loadAndExecuteAddons = async () => {
  const currentlyInstalledAddons = localStorage.getItem("installedAddons");
  if (currentlyInstalledAddons) {
    const installedAddons = JSON.parse(currentlyInstalledAddons);
    installedAddons.forEach(async (addonId: string) => {
      const { data } = await supabase()
        .from("addons")
        .select("raw, type, style")
        .eq("id", addonId)
        .single();
      if (data) {
        if (data.type === "script") {
          const bypassDumbassCacheRulesUrl =
            data.raw + "?" + Math.random() * Date.now() * 10000 * Math.random();
          const addonJS = await fetch(bypassDumbassCacheRulesUrl).then((res) =>
            res.text()
          );
          eval(addonJS);
        } else if (data.type === "style") {
          const style = document.createElement("style");
          const bypassDumbassCacheRulesUrl2 =
            data.style +
            "?" +
            Math.random() * Date.now() * 10000 * Math.random();
          const styletext = await fetch(bypassDumbassCacheRulesUrl2).then(
            (res) => res.text()
          );
          style.innerHTML = styletext;
          document.head.appendChild(style);
        } else if (data.type === "hybrid") {
          const style = document.createElement("style");
          const bypassDumbassCacheRulesUrl2 =
            data.style +
            "?" +
            Math.random() * Date.now() * 10000 * Math.random();
          const styletext = await fetch(bypassDumbassCacheRulesUrl2).then(
            (res) => res.text()
          );
          style.innerHTML = styletext;
          document.head.appendChild(style);
          const bypassDumbassCacheRulesUrl =
            data.raw + "?" + Math.random() * Date.now() * 10000 * Math.random();
          const addonJS = await fetch(bypassDumbassCacheRulesUrl).then((res) =>
            res.text()
          );
          eval(addonJS);
        }
      }
    });
  }
};

const initEventListeners = () => {
  window.addEventListener("toast", ((e: CustomEvent) => {
    toast(e.detail.message, e.detail.options);
  }) as EventListener);
};

export {
  installAddon,
  uninstallAddon,
  loadAndExecuteAddons,
  initEventListeners,
};

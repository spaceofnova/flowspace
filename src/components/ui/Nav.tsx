import { Link, useLocation } from "react-router-dom";
import Div from "./elements/Div";
import { Grid, Home, ShoppingBagIcon, Wrench } from "lucide-react";
import { ModeToggle } from "./darkmodetoggle";

export default function Nav() {
  const location = useLocation();

  const NavPages = [
    {
      name: "Home",
      path: "/web",
      icon: <Home strokeWidth={1.5} className="w-full h-full" />,
    },
    {
      name: "Apps",
      path: "/web/apps",
      icon: <Grid strokeWidth={1.5} className="w-full h-full" />,
    },
    {
      name: "Store",
      path: "/web/store",
      icon: <ShoppingBagIcon strokeWidth={1.5} className="w-full h-full" />,
    },
    {
      name: "Settings",
      path: "/web/settings",
      icon: <Wrench strokeWidth={1.5} className="w-full h-full" />,
      bottom: true,
    },
  ];
  return (
    <Div className="absolute md:top-0 bottom-0 flex md:flex-col md:w-12 md:h-screen z-40 justify-evenly md:justify-normal h-18 w-full">
      <div className="items-center justify-center gap-2 md:w-full mt-2 mb-2 hidden md:flex">
        <ModeToggle />
      </div>
      {NavPages.map((page) => (
        <Link
          to={page.path}
          key={page.name}
          className={`flex items-center justify-center w-full transition-all duration-400 ease-out p-2 md:p-0 ${
            page.bottom ? "md:absolute md:bottom-0" : ""
          } ${location.pathname === page.path ? "bg-primary/10" : ""}
          `}
        >
          <div className="w-8 h-8 md:w-full md:h-full aspect-square transition-colors duration-400 ease-out p-1 md:p-3">
            {page.icon}
          </div>
        </Link>
      ))}
    </Div>
  );
}

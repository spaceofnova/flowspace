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
    <Div className="absolute left-0 top-0 flex flex-col w-12 h-full z-40 justify-between">
      <div>
        <div className="flex items-center justify-center gap-2 w-full mt-2 mb-2">
          <ModeToggle />
        </div>
        {NavPages.map((page) => (
          <Link
            to={page.path}
            key={page.name}
            className={`flex items-center justify-center w-full aspect-square gap-1  ${
              page.bottom ? "absolute bottom-0" : ""
            }`}
          >
            <div
              className={`w-full h-full p-3 transition-colors duration-400 ease-out ${
                location.pathname === page.path ? "bg-primary/10" : ""
              }`}
            >
              {page.icon}
            </div>
          </Link>
        ))}
      </div>
    </Div>
  );
}

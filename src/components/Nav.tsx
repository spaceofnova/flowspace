"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ui/ModeToggle";
import { CommandDialogDemo } from "./commandbox";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import { indexGames } from "@/utils/indexing";

type NavLink = {
  title: string;
  href: string;
};

const links: NavLink[] = [
  { title: "All Apps", href: "/a" },
  { title: "Blogs", href: "/blogs" },
  { title: "Settings", href: "/s" },
  {
    title: "Beta Info!",
    href: "/blogs/beta-info",
  },
];

const index = async () => {
  await indexGames();
};

export default function Nav() {
  const pathname = usePathname();

  index();
  // Remove border after nav is done
  return (
    <header className="h-12 w-full border-b">
      <nav className="mx-auto flex h-full max-w-screen-2xl items-center gap-2 px-4 md:justify-between">
        <div className="flex items-center gap-2 md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MenuIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {links.map((link, index) => (
                <DropdownMenuItem key={index}>
                  <Link href={link.href} className="text-foreground">
                    {link.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/">
            <h1 className="text-xl">Flowspace</h1>
          </Link>
        </div>
        <div className="hidden items-center gap-4 md:flex">
          <Link href="/">
            <h1 className="text-xl">Flowspace</h1>
          </Link>
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={
                "hover:text-foreground transition-colors duration-150 hover:underline" +
                (pathname === link.href
                  ? " text-foreground"
                  : " text-foreground/70")
              }
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex w-full items-center gap-2 md:w-fit">
          <CommandDialogDemo />
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}

import { Link, useLocation } from "react-router";

import { cn } from "@/lib/utils";
import { NavigationMenuList, NavigationMenu } from "../navigation-menu";
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";

export const CustomMenu = () => {
  const { pathname } = useLocation();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <NavigationMenu className="py-5">
      <NavigationMenuList>
        {/* Home */}
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(isActive("/") && "bg-slate-200", "p-2 rounded-md")}
          >
            <Link to="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* Search */}
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              isActive("/search") && "bg-slate-200",
              "p-2 rounded-md",
            )}
          >
            <Link to="/search">Search</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

"use client";

import { forwardRef, useEffect, useState } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Logo from "../logo";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { getPostsMeta } from "@/lib/posts";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [position, setPosition] = useState("bottom");

  return (
    <header className="w-full h-25 flex items-center justify-between">
      <Logo />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="md:hidden mx-4">
            {" "}
            <HamburgerMenuIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 ">
          <DropdownMenuLabel>Blog Articles</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="article-of-the-month">
              Article of the Month
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="All Articles">
              Articles
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Laudato-Si">
              Learn More About Laudato Si
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <NavigationMenu className="hidden md:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Blog Articles</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <div className="flex h-full w-full select-none flex-col justify-center items-start rounded-md  p-6 no-underline outline-none focus:shadow-md">
                      <Logo />
                      <p className="text-sm leading-tight text-muted-foreground text-center">
                        Our journey to care for our planet earth!
                      </p>
                    </div>
                  </NavigationMenuLink>
                </li>
                <ListItem
                  href={`/articles/featured-article`}
                  title="Article of the Month"
                >
                  The latest article on how to care for our planet earth.
                </ListItem>
                <ListItem href="/articles" title="Articles">
                  The complete list of Our Planet Earth articles.
                </ListItem>
                <ListItem
                  href="/laudato-si"
                  title="Learn More About Laudato Si"
                >
                  Learn more about the encyclical letter by Pope Francis.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/globe" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Global Map
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/team" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Meet the Team
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;

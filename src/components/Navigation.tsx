"use client"

import * as React from "react"
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';

import { cn } from "../lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "./ui/Navigation-menu"
import { ComputerIcon } from "./icons/ComputerIcon";
import { TicketIcon } from "./icons/TicketIcon";
import { PresentationIcon } from "./icons/PresentationIcon";

type NavigationItem = {
    icon?: any; title: string; href: string; description: string, external?: boolean
}
type NavigationItems = Array<NavigationItem>;

const events: NavigationItems = [
    {
        icon: ComputerIcon,
        title: "LAN-party",
        href: "/norway-live-2025/lan",
        description: "Bring your rig for the whole weekend",
        external: false,
    },
    {
        icon: PresentationIcon,
        title: "Mini-Expo",
        href: "/norway-live-2025/expo",
        description: "Saturday presentations and stands",
        external: false,
    },
    {
        icon: TicketIcon,
        title: "LAN-tickets",
        href: "https://forms.gle/TYVSk4v57VhtjfoB9",
        description: "Purchase a seat for the LAN-party",
        external: true,
    },
]

const about: NavigationItems = [
    {
        title: "About us",
        href: "/about",
        description: "Read more about the organization",
    },
    {
        title: "Contact Us",
        href: "/contact",
        description: "Get in touch with us",
    },
]

export default function Navigation() {
    return (
        <NavigationMenu >
            <NavigationMenuList className="flex flex-col md:flex-row w-full items-center">
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Norway Live 2025</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[100%] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {events.map((component) => (
                                <ListItem
                                    key={component.title}
                                    icon={component.icon}
                                    title={component.title}
                                    href={component.href}
                                    external={component.external}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <a
                            href="/sponsor"
                            className="block px-4 py-2 text-base font-medium transition-colors rounded-md hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                            Sponsoring
                        </a>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[100%] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {about.map((component) => (
                                <ListItem
                                    key={component.title}
                                    icon={component.icon}
                                    title={component.title}
                                    href={component.href}
                                    external={component.external}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

interface NavigationListItemProps extends React.ComponentPropsWithoutRef<"a"> {
    icon?: any,
    title: string;
    external?: boolean;
}

const ListItem = React.forwardRef<HTMLAnchorElement, NavigationListItemProps>(
    ({ className, icon, title, children, external, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <a
                        ref={ref}
                        target={external ? "_blank" : undefined}
                        className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            className
                        )}
                        {...props}
                    >
                        {icon && icon({ width: "1.5rem", marginLeft: 0 })}
                        <div className="text-sm font-medium leading-none">
                            {title}
                            {external == true && <ExternalLinkIcon width="0.75rem" marginLeft="0.3rem" />}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {children}
                        </p>
                    </a>
                </NavigationMenuLink>
            </li>
        )
    })
ListItem.displayName = "ListItem"

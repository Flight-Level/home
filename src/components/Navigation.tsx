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

const community: NavigationItems = [
    {
        icon: ComputerIcon,
        title: "LAN-party",
        href: "/norway-live-2025/lan",
        description: "Bring your rig for the whole weekend",
        external: false,
    },
    {
        icon: TicketIcon,
        title: "LAN-tickets",
        href: "https://forms.gle/TYVSk4v57VhtjfoB9",
        description: "Purchase a seat for the LAN-party",
        external: true,
    },
    {
        icon: PresentationIcon,
        title: "Mini-Expo",
        href: "/norway-live-2025/expo",
        description: "Saturday presentations and stands",
        external: false,
    },
    
]

const gettingstarted: NavigationItems = [
    {
        title: "Sponsor Information",
        href: "/sponsors",
        description: "Read about VATSIM and possibilities",
        external: false,
    },
]

const components: NavigationItems = [
    {
        title: "Airports & Charts",
        href: "https://wiki.vatsim-scandinavia.org/shelves/pilots",
        description: "Our airports with charts and procedures",
        external: true,
    },
    {
        title: "Available Stands",
        href: "https://stands.vatsim-scandinavia.org/",
        description: "Live map for unoccupied stands",
        external: true,
    },
    {
        title: "Events",
        href: "https://events.vatsim-scandinavia.org/",
        description: "Overview of our upcoming events",
        external: true,
    },
    {
        title: "Event Booking",
        href: "https://booking.vatsim-scandinavia.org/",
        description: "Book slots for our larger events here",
        external: true,
    },
]

const controllers: NavigationItems = [
    {
        title: "Wiki",
        href: "https://wiki.vatsim-scandinavia.org/",
        description: "Documents and procedures",
        external: true,
    },
    {
        title: "Control Center",
        href: "https://cc.vatsim-scandinavia.org/",
        description: "Rosters, bookings and applications",
        external: true,
    },
    {
        title: "Training Department",
        href: "https://wiki.vatsim-scandinavia.org/books/training-documents",
        description: "FAQ and training-related policies",
        external: true,
    },
    {
        title: "Visiting Controllers",
        href: "https://wiki.vatsim-scandinavia.org/books/training-documents/page/transfer-and-visiting-policy-in-vatsim-scandinavia",
        description: "Information regarding visiting ratings",
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
                            {community.map((component) => (
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
                            href="/sponsors"
                            className="block px-4 py-2 text-base font-medium transition-colors rounded-md hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                            Sponsors
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

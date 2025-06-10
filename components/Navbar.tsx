"use client";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home, Pencil, Mail } from "lucide-react";

const navItems = [
    {
        name: "About",
        link: "/",
        icon: <Home className="h-4 w-4" />,
    },
    {
        name: "Details",
        link: "/",
        icon: <Pencil className="h-4 w-4" />,
    },
    {
        name: "Contact",
        link: "/",
        icon: <Mail className="h-4 w-4" />,
    },
];

export default function Navbar() {
    return <FloatingNav navItems={navItems} />;
}

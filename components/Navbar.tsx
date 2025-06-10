"use client";
import { FloatingNav } from "@/components/ui/floating-navbar";

const navItems = [
    {
        name: "About",
        link: "/",
    },
    {
        name: "Details", 
        link: "/",
    },
    {
        name: "Contact",
        link: "/",
    },
];

export default function Navbar() {
    return <FloatingNav navItems={navItems} />;
}

"use client";
import { FloatingNav } from "@/components/ui/floating-navbar";

const navItems = [
    {
        name: "About",
        link: "#about",
    },
    {
        name: "Schedule", 
        link: "#timeline",
    },
    {
        name: "Speakers",
        link: "#speakers",
    },
];

export default function Navbar() {
    return <FloatingNav navItems={navItems} />;
}

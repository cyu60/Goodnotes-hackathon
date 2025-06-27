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
        name: "Prizes",
        link: "#prizes",
    },
    {
        name: "Sponsor",
        link: "#sponsor",
    },
    {
        name: "FAQ",
        link: "#faq",
    }
];

export default function Navbar() {
    return <FloatingNav navItems={navItems} />;
}

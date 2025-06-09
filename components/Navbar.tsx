import Link from "next/link";

export default function Navbar() {
    return(
        <div className="flex justify-between items-center p-4 bg-[var(--gnTeal)]">
            <h1 className="text-white font-bold"> Goodnotes Hackathon </h1>
            <div className="flex items-center gap-4">
                <Link href="/">About</Link>
                <Link href="/register">Register</Link>
                <Link href="/">Contact</Link>
            </div>
        </div>
    );
}
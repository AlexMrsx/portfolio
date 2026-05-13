'use client'

import Link from "next/link";
import { toast } from "sonner"
import {Briefcase, Folder, Hammer} from "lucide-react";


export function Navbar() {

    const navItems = [
        { label: "Skills", icon: <Hammer />, href: "#skills" },
        { label: "Projects", icon: <Folder /> , href: "#projects" },
        { label: "Career", icon: <Briefcase /> , href: "#career" },
    ];
    return (
        <nav className="flex fixed top-0 left-0 right-0 z-50 items-center text-2xl h-20 w-full font-extralight px-6 py-1  text-white ">

            <div>
                <p className="hover:scale-110 text-white duration-200 font-semibold text-4xl cursor-pointer transition-transform"><span className="bg-gradient-to-r from-green-300 to-green-400 bg-clip-text text-transparent">A</span>M.</p>
            </div>

            {/*<div className="absolute left-1/2 -translate-x-1/2 flex flex-row gap-5">*/}
            {/*    {navItems.map((item) => (*/}
            {/*        <NavButton key={item.label} href={item.href}>*/}
            {/*            {item.icon}*/}
            {/*            {item.label}*/}
            {/*        </NavButton>*/}
            {/*    ))}*/}
            {/*</div>*/}

            <div className="ml-auto">
                <button
                    onClick={()=>toast.warning("I'm creating the website, please wait...", {position: "top-center"})}
                    className="px-3 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:text-green-400 hover:bg-green-400/20 duration-300 transition-all"
                >

My Company                </button>

            </div>

        </nav>
    )
}

function NavButton({ children, href }: { children: React.ReactNode, href: string }) {
    return (
        <Link
            href={href}
            className="text-white flex items-center gap-2 cursor-pointer bg-transparent border-b border-transparent hover:border-white duration-300 transition-all"
        >
            {children}
        </Link>
    )
}

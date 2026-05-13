import { Mail, Computer, Unlink2, Phone } from "lucide-react";
import {cn} from "@/lib/utils";
import Image from "next/image";
import * as React from "react";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {SiShadcnui, SiTailwindcss} from "react-icons/si";
import {RiNextjsFill} from "react-icons/ri";
import {CgMenuMotion} from "react-icons/cg";


export function FooterSection() {
    return (
        <div className="flex flex-col items-center justify-center h-full gap-8 ">
            <div className="relative z-0 border-4 border-white  w-70 h-70  sm:w-120 sm:h-120 rounded-full overflow-hidden">
                <Image
                    src="/profil.png"
                    alt="profil"
                    fill
                    className="object-cover object-center"
                />
            </div>
            <div className="text-center space-y-4">
                <h2 className="text-8xl font-semibold bg-gradient-to-r from-green-300 to-green-400 bg-clip-text text-transparent">
                    Ready to collaborate?
                </h2>
                <p className="text-white/80 mx-auto text-2xl max-w-2xl">
                    I am always open to new opportunities and interesting collaborations. Do not hesitate to contact me to discuss your projects!
                </p>
            </div>

            <div className="flex flex-col items-center gap-6">
                <div className="flex gap-4">
                    <ContactButton
                        icon={Mail}
                        label="Email"
                        href="mailto:alex.marescaux62@gmail.com"
                        color="hover:text-green-400 hover:border-green-400"
                    />
                    <ContactButton
                        icon={FaGithub}
                        label="GitHub"
                        href="https://github.com/AlexMrsx"
                        color="hover:text-gray-300 hover:border-gray-300"
                    />
                    <ContactButton
                        icon={FaLinkedin}
                        label="LinkedIn"
                        href="https://www.linkedin.com/in/alex-marescaux-1a6594226/"
                        color="hover:text-blue-400 hover:border-blue-400"
                    />
                    <ContactButton
                        icon={Phone}
                        label="Phone"
                        href="tel:+33681519928"
                        color="hover:text-green-300 hover:border-green-300"
                    />
                </div>

                <div className="text-center text-white/60 text-lg">
                    <p>© 2026 Alex Marescaux - Portfolio</p>
                    <p className="text-sm mt-2 flex flex-row items-center gap-3">Developed with <RiNextjsFill/> Next.js <SiTailwindcss/> Tailwind CSS <CgMenuMotion/> Motion.dev <SiShadcnui/> Shadcn UI</p>
                </div>
            </div>
        </div>

    );
}

function ContactButton({ icon: Icon, label, href, color }: {
    icon: React.ComponentType<{className?: string}>,
    label: string,
    href: string,
    color: string
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white transition-all duration-300 hover:bg-white/10 hover:scale-105 ${color}`}
        >
            <Icon className="w-5 h-5" />
            <span className="font-medium">{label}</span>
        </a>
    );
}

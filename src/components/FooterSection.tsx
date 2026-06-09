import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import * as React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiShadcnui, SiTailwindcss } from "react-icons/si";
import { CgMenuMotion } from "react-icons/cg";
import { RiNextjsFill } from "react-icons/ri";

export function FooterSection() {
    return (
        <div className="flex flex-col items-center justify-center w-full max-w-full gap-8 px-4 mb-5 sm:mb-0 py-10">

            <div className="relative z-0 border-4 border-white mt-10 w-48 h-48 sm:w-96 sm:h-96 md:w-[400px] md:h-[400px] rounded-full overflow-hidden shrink-0">
                <Image
                    src="/profil.png"
                    alt="profil"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>

            <div className="text-center space-y-4 w-full max-w-2xl">
                <h2 className="text-4xl sm:text-7xl md:text-8xl font-semibold bg-gradient-to-r from-green-300 to-green-400 bg-clip-text text-transparent break-words">
                    Ready to collaborate?
                </h2>
                <p className="text-white/80 mx-auto text-base sm:text-2xl">
                    I am always open to new opportunities and interesting collaborations. Do not hesitate to contact me to discuss your projects!
                </p>
                <a
                    href="/cvnew.pdf"
                    download='cv-alex-marescaux'
                    className="inline-block w-full sm:w-auto px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all text-center font-medium mt-2"
                >
                    Download my resume
                </a>
            </div>

            <div className="flex flex-col items-center gap-6 w-full">
                <div className="sm:flex sm:w-3/4 grid grid-cols-4 justify-center gap-3 sm:gap-4 w-full">
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

                <div className="text-center text-white/60 text-base sm:text-lg">
                    <p>© 2026 Alex Marescaux - Portfolio</p>
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
            className={`flex justify-center items-center mx-auto w-full gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white transition-all duration-300 hover:bg-white/10 hover:scale-105 ${color}`}
        >
            <Icon className="w-3 h-3 shrink-0" />
            <span className="font-medium  text-xs  sm:text-base">{label}</span>
        </a>
    );
}
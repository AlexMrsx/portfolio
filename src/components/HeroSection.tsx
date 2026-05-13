'use client'

import {ReactNode, useEffect, useState} from "react";
import {setInterval} from "node:timers";
import Image from "next/image";
import { Badge } from "@/components/ui/badge"
import {AnimatePresence, motion} from "framer-motion";
import {toast} from "sonner";
import {Button} from "@/components/ui/button";
import {CircleUser} from "lucide-react";


function BadgeHero(props: { children: ReactNode }) {
    return(
        <span className="rounded-3xl border flex flex-row items-center gap-1 border-green-300 px-4 py-1 text-2xl text-white bg-white/20 backdrop-blur-sm font-extralight">
            {props.children}
        </span>
    )
}

export function HeroSection() {
    const [libelle, setLibelle] = useState('Alex');
    const libelleRef = ["Alex", "a developer", "an entrepreneur"];

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            index = (index + 1) % libelleRef.length;
            setLibelle(libelleRef[index]);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className=" max-w-1/2 mx-auto flex  flex-col items-center justify-center w-full ">
            <div className="flex flex-col  gap-4 font-bold justify-center w-full text-center items-center h-full leading-none">
                <div className="">
                    <h3 className="sm:text-[130px] text-[50px]">Hello, I&#39;m</h3>
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={libelle}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.4 }}
                            style={{ willChange: 'transform, opacity' }}
                            className="sm:text-[150px] text-[40px] bg-linear-to-r from-green-300 to-green-400 bg-clip-text text-transparent"
                        >
                            {libelle}
                        </motion.span>
                    </AnimatePresence>
                </div>

                <BadgeHero><CircleUser/> Intern developer</BadgeHero>

            </div>
        </div>
    )
}
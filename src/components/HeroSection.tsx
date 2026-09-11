'use client'

import {ReactNode, useEffect, useState} from "react";
import {setInterval} from "node:timers";
import Image from "next/image";
import { Badge } from "@/components/ui/badge"
import {AnimatePresence, motion} from "framer-motion";
import {toast} from "sonner";
import {Button} from "@/components/ui/button";
import {CircleUser} from "lucide-react";
import {ShimmerButton} from "@/components/ui/shimmer-button";
import {WordRotate} from "@/components/ui/word-rotate";
import {FlickeringGrid} from "@/components/ui/flickering-grid";
import * as React from "react";
import {useIsMobile} from "@/components/hook/useIsMobile";


function BadgeHero(props: { children: ReactNode }) {
    return(
        <span className="rounded-3xl border flex flex-row items-center gap-1 border-green-300 px-4 py-1 text-2xl text-white bg-white/20 backdrop-blur-sm font-extralight">
            {props.children}
        </span>
    )
}

export function HeroSection() {

    const isMobile = useIsMobile();
    return (
        <div className=" sm:max-w-1/2 mx-auto flex  flex-col items-center justify-center w-full my-80 sm:my-0 ">
            <div className="flex flex-col  gap-4 font-bold justify-center w-full text-center items-center h-full leading-none">
                <div className="">
                    {!isMobile && (
                        <FlickeringGrid
                            className="absolute inset-0 z-0   "
                            squareSize={4}
                            gridGap={6}
                            color="#6B7280"
                            maxOpacity={0.2}
                            flickerChance={0.3}
                        />
                    )}
                    <h3 className="sm:text-[130px] text-[50px]">Hello, I&#39;m</h3>
                    <WordRotate className="sm:text-[140px] text-[40px] bg-green-300 bg-clip-text text-transparent" words={["Alex", "a developer", "entrepreneur"]} />

                </div>

                <BadgeHero><CircleUser/> Intern developer</BadgeHero>

            </div>
        </div>
    )
}
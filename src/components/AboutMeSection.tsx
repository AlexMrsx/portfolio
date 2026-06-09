"use client"

import Image from "next/image";
import {
    Badge,
    Bike,
    Car,
    ChartNoAxesColumn,
    Code,
    GraduationCap,
    Languages,
    LucideVan,
    Search,
    Shield
} from "lucide-react";
import * as React from "react";
import {useIsMobile} from "@/components/hook/useIsMobile";
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {LightRays} from "@/components/ui/light-rays";

export function AboutMeSection() {
    const isMobile = useIsMobile();

    function getAdjective() {
        return <div className="flex  sm:flex-row flex-col gap-3">
            <AdjectiveBadge title={"Serious & Rigorous"} icon={GraduationCap}/>
            <AdjectiveBadge title={"Curious & self-taught"} icon={Search}/>
            <AdjectiveBadge title={"Team spirit"} icon={Shield}/>
            <AdjectiveBadge title={"Ambitious"} icon={ChartNoAxesColumn}/>
        </div>;
    }

    function getItems() {
        return <div className="flex  sm:flex-row flex-col gap-3">
            <ItemsBadge title={"English B1"} icon={Languages}/>
            <ItemsBadge title={"Car license (B)"} icon={Car}/>
            <ItemsBadge title={"Bike / Scooter"} icon={Bike}/>
        </div>;
    }

    return (
        <div className="text-center  sm:max-w-3/4 mx-10 my-20 sm:m-0 flex sm:flex-row flex-col items-center  justify-center h-full leading-none sm:mx-auto ">
            <div className="sm:w-1/2 w-full text-left sm:mx-10 mx-4 flex flex-col gap-4 ">
                <h1 className="sm:text-8xl text-6xl font-semibold">About Me</h1>
                {isMobile ? (
                    <div className="flex gap-3">
                        <Dialog>
                            <form>
                                <DialogTrigger asChild>
                                    <Button variant="secondary">Who am I?</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto bg-linear-to-br from-black via-[#0d1e2c] to-[#152331] border border-white/10">
                                    {getAdjective()}
                                    <DialogClose asChild>
                                        <Button variant="secondary">Close</Button>
                                    </DialogClose>

                                </DialogContent>
                            </form>
                        </Dialog>
                        <Dialog>
                            <form>
                                <DialogTrigger asChild>
                                    <Button variant="secondary">What else ?</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto bg-linear-to-br from-black via-[#0d1e2c] to-[#152331] border border-white/10">
                                    {getItems()}
                                    <DialogClose asChild>
                                        <Button variant="secondary">Close</Button>
                                    </DialogClose>

                                </DialogContent>
                            </form>
                        </Dialog>
                    </div>

                ) : (
                    <>
                        {getAdjective()}
                        {getItems()}
                    </>
                )}


                <p className="text-accent-foreground text-justify  sm:text-3xl text-xl">I’m a computer science student learning full-stack development. I enjoy building useful, well-designed web applications and, more importantly, understanding how they work under the hood.

                    I’ve worked on several projects and completed an internship where I used technologies like Java, React, Next.js, and PostgreSQL. I always try to write clean code, keep improving, and build projects I’m genuinely proud of.</p>
            </div>

            <div className="relative sm:w-1/2 w-full flex flex-col items-center justify-center h-full leading-none">

                <div className="relative z-0 border-4 border-white mt-5 sm:mt-0 w-70 h-70  sm:w-120 sm:h-120 rounded-full overflow-hidden">
                    <Image
                        src="/profil.png"
                        alt="profil"
                        fill
                        className="object-cover object-center"
                    />
                </div>
            </div>

        </div>
        )

}

type AdjectiveBadgeProps = {
    title: string;
    icon: React.ComponentType<{className?: string}>;
}

function AdjectiveBadge({ title, icon: Icon }: AdjectiveBadgeProps) {
    return (
        <span  className=" flex items-center gap-2 text-s px-3 py-1 rounded-full border border-white/30 text-white bg-white/10  drop-shadow-gray-500 shadow-lg">
                                            <Icon className="w-5 h-5" />
            {title}
        </span>
    )
}

function ItemsBadge({ title, icon: Icon }: AdjectiveBadgeProps) {
    return (
        <span  className="flex items-center gap-2 text-s px-3 py-1 rounded-full border border-white/30 text-white bg-gray-800  drop-shadow-gray-500 shadow-lg">
                                            <Icon className="w-5 h-5" />
            {title}
        </span>
    )
}
'use client'

import {useEffect, useState} from "react";
import { Button } from "@/components/ui/button"
import {Code, Database, FrameIcon, GalleryVerticalEnd, Library, Monitor, Play, Wrench} from "lucide-react";
import Image from "next/image";
import {useIsMobile} from "@/components/hook/useIsMobile";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area"
import {LightRays} from "@/components/ui/light-rays";
import * as React from "react";

type Skill = {
    name: string,
    image: string,
    Skilltype: string,
}

export function SkillsSection(){
    const isMobile = useIsMobile()
    const [skillsTAB, setSkillsTab] = useState<Skill[]>([])
    const[activeFilter, setActiveFilter] = useState<string>("All")

    const filteredSkills = skillsTAB.filter(skill=>{
        if(activeFilter === "All")return true
        return skill.Skilltype === activeFilter
    })

    const filters = [
        { label: 'All', icon: <GalleryVerticalEnd /> },
        { label: 'language', icon: <Code /> },
        { label: 'runtime', icon: <Play /> },
        { label: 'database', icon: <Database /> },
        { label: 'software', icon: <Monitor /> },
        { label: 'library', icon: <Library /> },
        { label: 'framework', icon: <FrameIcon /> },
        { label: 'devOps', icon: <Wrench /> },

    ]


    useEffect(() => {
        fetch("/json/skills.json")
            .then(res => res.json())
            .then((data: Skill[]) => setSkillsTab(data))

    }, [])


    function getFilterButton() {
        return filters.map(filter => (
            <Button
                key={filter.label}
                variant="skillFilterButton"
                className={activeFilter === filter.label ? "bg-green-400/50 text-green-400 " : ""}
                onClick={() => setActiveFilter(filter.label)}
            >
                {filter.icon} {filter.label}
            </Button>
        ));
    }

    return (
    <div className="flex flex-col h-[85vh] my-20 sm:p-5 sm:max-w-3/4 gap-3 w-full">
        <LightRays speed={3} count={15} blur={100} length={"20vh"}/>

        <div className="flex flex-col text-center gap-4 mt-6 shrink-0">
            <h2 className="sm:text-7xl text-5xl font-semibold">My Skills</h2>
            <p className="text-gray-300">Here is a list of tools that I master as a developer</p>
            <div className="sm:flex m-auto sm:gap-2 mt-4">
                {!isMobile && getFilterButton()}
            </div>
        </div>

        <div className="my-auto w-full max-h-[55vh] flex flex-col justify-center">
            {isMobile ? (
                <ScrollArea className="h-[45vh] border-white/40 border-2 rounded-2xl m-3">
                    <div className="grid grid-cols-2 p-5 gap-3">
                        {filteredSkills.map((item) => (
                            <SkillCard key={item.name} skill={item} />
                        ))}
                    </div>
                    <ScrollBar />
                </ScrollArea>
            ) : (
                <div className="w-full flex justify-center items-center my-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-9 gap-4 w-full justify-center justify-items-center">
                        {filteredSkills.map((item) => (
                            <SkillCard key={item.name} skill={item} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    </div>


    )
}


function SkillCard({ skill }: { skill: Skill}){
    return (
        <div className="h-36 w-full text-center p-5 justify-center flex flex-col items-center gap-3 bg-white/10 text-white rounded-2xl border-2 border-gray-200/20 hover:scale-102 transition duration-200 hover:border-gray-200 hover:bg-white/20">
            <Image width={50} height={50} src={skill.image} alt={`Image of ${skill.name}`} className="object-contain" />
            <span className="text-sm font-medium line-clamp-2">{skill.name}</span>
        </div>
    )
}

type SkillButtonFilterProps = {
    isSelected: boolean
    children: React.ReactNode
}

function SkillButtonFilter({ isSelected, children }: SkillButtonFilterProps) {
    return (
        <Button variant="skillFilterButton">
            {children}
        </Button>
    )
}
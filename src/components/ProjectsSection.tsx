"use client"
import * as React from "react"

import {useEffect, useState} from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {Code} from "lucide-react";
import {useIsMobile} from "@/components/hook/useIsMobile";

type Project = {
        title: string
        description: string
        long: string
        tags: string[]
        github: string
        image: string
        type: string
        equipe: string
}

export function ProjectsSection() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [activeSearch, setActiveSearch] = useState<string>("")
    const [filteredProject, setFilteredProject] = useState<Project[]>(projects)

    useEffect(() => {
        fetch("/json/projects.json")
            .then(res => res.json())
            .then((data: Project[]) => {setProjects(data)
            setFilteredProject(data)})

    }, [])

    useEffect(() => {
        if (!activeSearch) {
            setFilteredProject(projects)
            return
        }

        const filtered = projects.filter(project =>
            project.title.toLowerCase().includes(activeSearch.toLowerCase()) ||
            project.tags.some(tag => tag.toLowerCase().includes(activeSearch.toLowerCase()))
        )

        setFilteredProject(filtered)
    }, [activeSearch, projects])
    const isMobile = useIsMobile()
    return (
        <div className="flex p-5 max-w-2/3 flex-col  w-full h-full items-center">
            <div className="flex flex-col text-center gap-4">
                <h2 className="bg-linear-to-r from-[#152331] to-[#4b6a82] bg-clip-text text-transparent sm:text-8xl text-6xl font-semibold">
                    My Projects
                </h2>
                <p className="text-muted-foreground">Here is a list of someone of my projects as a dev </p>
            </div>



            <Carousel
                opts={{
                    align: "center",
                }}
                className="sm:w-full w-[40vh] my-auto flex flex-col gap-4 "
            >
                <Field orientation="horizontal" className="sm:w-1/2 mx-auto mt-3 ">
                    <Input onChange={(e)=>{setActiveSearch(e.target.value)}} className="bg-linear-to-r from-black to-[#152331] h-11 " type="search" placeholder="Search..." />
                </Field>
                <CarouselContent>
                    {filteredProject.map((project, index) => (
                        <CarouselItem key={index} className=" ms:basis-1/2 lg:basis-1/3">
                            <ProjectCard project={project} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>


        </div>


    )
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <Card className="group relative w-full  hover:border-white transition
         duration-200 overflow-hidden border-3 border-white/10 bg-linear-to-br from-black via-[#0d1e2c] to-[#152331] text-white">

            <div className="relative rounded-2xl mx-2  h-48 overflow-hidden">
                {project.image ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover "
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-green-900/20 to-[#152331]">
                        <Code className="w-12 h-12 text-green-400/40" />
                    </div>
                )}
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
            </div>

            <CardHeader className="pb-2">
                <CardTitle className="text-lg font-bold text-white">{project.title}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-3">
                <CardDescription className="text-white/60 text-sm line-clamp-2">
                    {project.description}
                </CardDescription>

                <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-xs px-2 py-0.5 rounded-full border border-green-400/30 text-green-400/80 bg-green-400/5">
                            {tag}
                        </span>
                    ))}
                    {project.tags.length > 3 && (
                        <span className="text-xs px-2 py-0.5 text-white/40">
                            +{project.tags.length - 3}
                        </span>
                    )}
                </div>

                <ProjectCardDialog project={project} />
            </CardContent>
        </Card>
    )
}

function ProjectCardDialog({ project }: { project: Project }) {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button  className="w-full" variant="secondary">About</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto bg-linear-to-br from-black via-[#0d1e2c] to-[#152331] border border-white/10">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-white">{project.title}</DialogTitle>
                        <DialogDescription className="text-white/60 flex flex-col">

                            <div>
                                Type: <span className="text-green-400">{project.type}</span>
                            </div>
                            <div>
                                Equipe: <span className="text-green-400">{project.equipe}</span>
                            </div>

                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-4">
                            {project.image && (
                            <div className="relative w-full h-64 rounded-lg overflow-hidden border border-white/10">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                            </div>
                        )}

                        <div>
                            <h4 className="text-white font-semibold mb-2">Description rapide</h4>
                            <p className="text-white/80 text-sm">{project.description}</p>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-2">Détails du projet</h4>
                            <p className="text-white/70 text-sm leading-relaxed">{project.long}</p>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-2">Technologies utilisées</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-full border border-green-400/50 text-green-400 bg-green-400/10 text-xs font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="pt-2">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-400/20 border border-green-400/50 text-green-400 hover:bg-green-400/30 transition duration-200 text-sm font-medium"
                            >
                                <Code className="w-4 h-4" />
                                Voir sur GitHub
                            </a>
                        </div>
                    </div>
                    <DialogClose asChild>
                        <Button variant="secondary">Fermer</Button>
                    </DialogClose>

                </DialogContent>
            </form>
        </Dialog>
    )
}
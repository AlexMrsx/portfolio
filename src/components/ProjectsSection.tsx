"use client"

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

type Project = {
    title: string;
    description: string;
    long: string;
    tags: string[];
    github: string;
    image: string;
    type: string;
    equipe: string;
};

export function ProjectsSection() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [activeSearch, setActiveSearch] = useState("");

    useEffect(() => {
        fetch("/json/projects.json")
            .then((res) => res.json())
            .then((data: Project[]) => setProjects(data));
    }, []);

    const filteredProjects = useMemo(() => {
        const query = activeSearch.trim().toLowerCase();

        if (!query) {
            return projects;
        }

        return projects.filter(
            (project) =>
                project.title.toLowerCase().includes(query) ||
                project.tags.some((tag) => tag.toLowerCase().includes(query)),
        );
    }, [activeSearch, projects]);

    const [allProjects, setAllProjects] = useState(false)

    return (
        <div className="flex w-full max-w-7xl flex-col items-center px-4 py-8 sm:px-6 lg:px-8">
            <div className="mb-6 flex max-w-2xl flex-col gap-4 text-center">
                <h2 className="bg-gradient-to-r from-[#152331] to-[#4b6a82] bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-6xl lg:text-7xl">
                    My Projects
                </h2>
                <p className="text-sm text-[#152331] sm:text-base">
                    Here is a selection of projects I&apos;ve built and shipped across product, web, and technical challenges.
                </p>
            </div>

            <div className="mb-8 w-full max-w-xl">
                <Input
                    value={activeSearch}
                    onChange={(event) => setActiveSearch(event.target.value)}
                    className="h-12 border-white  text-white focus:bg-green-200/30  "
                    type="search"
                    placeholder="Search projects or technologies..."
                />
            </div>

            <div className="grid w-full gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {allProjects ? filteredProjects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                )): filteredProjects.slice(0,6).map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>

            {!allProjects && filteredProjects.length!== 0 ? (
                <Button className="text-xl mt-5" variant="secondary" onClick={() => setAllProjects(true)}>
                    See all projects
                </Button>
            ):                  <Button className="text-xl mt-5" variant="secondary" onClick={() => setAllProjects(false)}>

                See less
            </Button>}

            {filteredProjects.length === 0 && (
                <div className="mt-8 rounded-2xl border border-dashed border-white/15 bg-black/15 px-6 py-10 text-center text-sm text-slate-300">
                    No project matches your search.
                </div>
            )}
        </div>
    );
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <Card className="group ease-in-out duration-300 transition flex h-full flex-col overflow-hidden border  bg-gradient-to-br from-black via-[#0d1e2c] to-[#152331] text-white shadow-lg shadow-black/20 transition-all hover:-translate-y-1 hover:border-white/30">
            <div className="relative h-48 overflow-hidden border-b border-white/10">
                {project.image ? (
                    <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-green-900/20 to-[#152331]">
                        <Code className="h-12 w-12 text-green-400/40" />
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-white">{project.title}</CardTitle>
            </CardHeader>

            <CardContent className="flex flex-1 flex-col gap-4">
                <CardDescription className="line-clamp-3 text-sm text-slate-300">
                    {project.description}
                </CardDescription>

                <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-green-400/30 bg-green-400/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.08em] text-green-300"
                        >
                            {tag}
                        </span>
                    ))}
                    {project.tags.length > 3 && (
                        <span className="self-center text-xs text-slate-400">+{project.tags.length - 3}</span>
                    )}
                </div>

                <div className="mt-auto pt-2">
                    <ProjectCardDialog project={project} />
                </div>
            </CardContent>
        </Card>
    );
}

function ProjectCardDialog({ project }: { project: Project }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-full bg-white/8 text-white hover:bg-white/12" variant="secondary">
                    About
                </Button>
            </DialogTrigger>

            <DialogContent className="max-h-[90vh] overflow-y-auto border border-white/10 bg-gradient-to-br from-black via-[#0d1e2c] to-[#152331] text-white sm:max-w-2xl">
                <DialogHeader className="space-y-3">
                    <DialogTitle className="text-2xl font-bold text-white">{project.title}</DialogTitle>
                    <DialogDescription className="flex flex-col gap-1 text-left text-sm text-slate-300">
                        <span>
                            Type: <span className="text-green-300">{project.type}</span>
                        </span>
                        <span>
                            Team: <span className="text-green-300">{project.equipe}</span>
                        </span>
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-5">
                    {project.image && (
                        <div className="relative h-64 overflow-hidden rounded-xl border border-white/10">
                            <Image src={project.image} alt={project.title} fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>
                    )}

                    <div>
                        <h4 className="mb-2 text-base font-semibold text-white">Quick description</h4>
                        <p className="text-sm leading-relaxed text-slate-300">{project.description}</p>
                    </div>

                    <div>
                        <h4 className="mb-2 text-base font-semibold text-white">Project details</h4>
                        <p className="text-sm leading-relaxed text-slate-300">{project.long}</p>
                    </div>

                    <div>
                        <h4 className="mb-2 text-base font-semibold text-white">Tech stack</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-green-400/50 bg-green-400/10 px-3 py-1 text-xs font-medium text-green-300"
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
                            className="inline-flex items-center gap-2 rounded-lg border border-green-400/50 bg-green-400/20 px-4 py-2 text-sm font-medium text-green-300 transition hover:bg-green-400/30"
                        >
                            <Code className="h-4 w-4" />
                            View on GitHub
                        </a>
                    </div>
                </div>

                <DialogClose asChild>
                    <Button variant="secondary" className="mt-2 w-full sm:w-auto">
                        Close
                    </Button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
}
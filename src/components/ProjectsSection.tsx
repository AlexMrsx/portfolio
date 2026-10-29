"use client"

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Code, Search } from "lucide-react";
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
            .then((data: Project[]) => setProjects(data)).catch((err) => console.log(err));
    }, []);

    const filteredProjects = useMemo(() => {
        const query = activeSearch.trim().toLowerCase();

        if (!query) {
            return projects;
        }

        return projects.filter(
            (project) =>
                project.title.toLowerCase().includes(query) ||
                project.description.toLowerCase().includes(query) ||
                project.tags.some((tag) => tag.toLowerCase().includes(query)),
        );
    }, [activeSearch, projects]);

    const [allProjects, setAllProjects] = useState(false);
    const visibleProjects = allProjects || activeSearch.trim()
        ? filteredProjects
        : filteredProjects.slice(0, 6);

    return (
        <section className="w-full max-w-7xl px-4 py-16 font-sans sm:px-6 sm:py-20 lg:px-8">
            <header className="mx-auto mb-10 flex max-w-3xl flex-col items-center text-center sm:mb-12">
                <span className="mb-4 rounded-full border border-[#152331]/10 bg-white/45 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#31534c]">
                    Selected work
                </span>
                <h2 className="text-4xl font-semibold tracking-tight text-[#152331] sm:text-5xl lg:text-6xl">
                    Projects<span className="text-[#16866e]">.</span>
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#29443e]/80 sm:text-base">
                    A selection of things I&apos;ve designed, built, and learned from — from small experiments to team projects.
                </p>
            </header>

            <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:mb-9 sm:flex-row">
                <div className="relative w-full sm:max-w-sm">
                    <Search aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#527068]" />
                    <Input
                        value={activeSearch}
                        onChange={(event) => setActiveSearch(event.target.value)}
                        className="h-12 rounded-full border-[#152331]/10 bg-white/75 pl-11 text-sm text-[#152331] shadow-sm placeholder:text-[#527068]/75 focus-visible:border-[#16866e] focus-visible:ring-[#16866e]/20"
                        type="search"
                        placeholder="Search projects or technologies..."
                        aria-label="Search projects or technologies"
                    />
                </div>
                <p className="text-sm font-medium text-[#31534c]">
                    {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
                    {activeSearch.trim() ? " found" : " in the collection"}
                </p>
            </div>

            <div className="grid w-full gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {visibleProjects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <div className="mt-8 w-full rounded-2xl border border-dashed border-[#152331]/20 bg-white/35 px-6 py-10 text-center text-sm text-[#31534c]">
                    No projects match your search. Try another title or technology.
                </div>
            )}

            {!activeSearch.trim() && filteredProjects.length > 6 && (
                <Button
                    className="mt-9 h-11 rounded-full border-[#152331]/15 bg-[#152331] px-6 text-sm font-medium text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#20394a]"
                    variant="secondary"
                    onClick={() => setAllProjects((showAll) => !showAll)}
                >
                    {allProjects ? "Show fewer projects" : "Explore all projects"}
                    {allProjects ? (
                        <ArrowDown aria-hidden="true" className="ml-1 h-4 w-4 rotate-180" />
                    ) : (
                        <ArrowDown aria-hidden="true" className="ml-1 h-4 w-4" />
                    )}
                </Button>
            )}
        </section>
    );
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <Card className="group flex h-full flex-col overflow-hidden rounded-2xl border-0 bg-white/90 py-0 text-[#152331] shadow-[0_12px_35px_-20px_rgba(21,35,49,0.55)] ring-1 ring-[#152331]/8 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_45px_-22px_rgba(21,35,49,0.45)]">
            <div className="relative h-52 overflow-hidden bg-[#dcebe5]">
                {project.image ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#dcebe5] to-[#b4d7ca]">
                        <Code aria-hidden="true" className="h-12 w-12 text-[#16866e]/45" />
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#152331]/45 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full border border-white/40 bg-white/85 px-3 py-1 text-[11px] font-semibold tracking-wide text-[#152331] shadow-sm backdrop-blur-sm">
                    {project.type}
                </span>
            </div>

            <CardHeader className="gap-2 px-5 pb-0 pt-5">
                <CardTitle className="text-lg font-semibold leading-snug text-[#152331] sm:text-xl">
                    {project.title}
                </CardTitle>
            </CardHeader>

            <CardContent className="flex flex-1 flex-col gap-4 px-5 pb-5 pt-3">
                <CardDescription className="line-clamp-2 min-h-10 text-sm leading-5 text-[#52655f]">
                    {project.description}
                </CardDescription>

                <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-[#16866e]/15 bg-[#16866e]/[0.07] px-2.5 py-1 text-[10px] font-semibold tracking-wide text-[#246b5c]"
                        >
                            {tag}
                        </span>
                    ))}
                    {project.tags.length > 3 && (
                        <span className="self-center text-xs font-medium text-[#6b8179]">+{project.tags.length - 3}</span>
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
                <Button className="h-10 w-full justify-between rounded-xl border border-[#152331]/10 bg-[#f2f7f4] px-4 text-sm font-medium text-[#152331] transition hover:border-[#16866e]/30 hover:bg-[#e6f2ec]" variant="secondary">
                    View project details
                    <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-[#16866e] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
            </DialogTrigger>

            <DialogContent className="max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-gradient-to-br from-[#10202d] via-[#152b38] to-[#203e49] text-white sm:max-w-2xl">
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
                            className="inline-flex items-center gap-2 rounded-lg border border-green-300/40 bg-green-300/15 px-4 py-2 text-sm font-medium text-green-200 transition hover:bg-green-300/25"
                        >
                            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                            Visit project
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
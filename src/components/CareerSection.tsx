import * as React from "react";
import {BriefcaseBusiness, GraduationCap, MapPin} from "lucide-react";

type TimelineItem = {
    date: string;
    title: string;
    location: string;
    description: string;
    icon: React.ComponentType<{className?: string}>;
    isActive?: boolean;
}

type CareerColumnProps = {
    title: string;
    items: TimelineItem[];
}

export function CareerSection() {
    return (
        <div className="flex p-5 flex-col w-full h-full items-center">
            <div className="flex flex-col text-center gap-4">
                <h2 className="text-white text-8xl font-semibold">
                    My Career
                </h2>
                <p className="text-muted-foreground">Here is my educational and professional background</p>
            </div>
            <div className="flex flex-row my-auto gap-60 w-full justify-center">
                <CareerColumn
                    title="School Career"
                    items={[
                        {
                            date: "September 2024 - Present",
                            title: "Bachelor's degree in Computer Science",
                            location: "IUT - Villeneuve d'Ascq",
                            description: "Currently in 2nd year",
                            icon: GraduationCap,
                            isActive: true
                        },
                        {
                            date: "September 2021 - July 2024",
                            title: "General Baccalaureate",
                            location: "Saint Dominique High School",
                            description: "Graduated with honors",
                            icon: GraduationCap
                        },
                        {
                            date: "Certifications",
                            title: "BAFA — Youth Work Certificate",
                            location: "Beuvry",
                            description: "Youth supervision and group activities leadership",
                            icon: GraduationCap
                        }
                    ]}
                />
                <CareerColumn
                    title="Professional Career"
                    items={[
                        {
                            date: "April 2026 - June 2026 (in progress)",
                            title: "Intern Developer at Tabuleo",
                            location: "Haubourdin",
                            description: "JS, HTML, CSS, React, Node.js...",
                            icon: BriefcaseBusiness,
                            isActive: true
                        },
                        {
                            date: "Feb 2025 - Present",
                            title: "Freelance — Micro-entrepreneur",
                            location: "Remote",
                            description: "Graphic design for content creators. Client management, invoicing & visual creation.",
                            icon: BriefcaseBusiness
                        },
                        {
                            date: "Summers 2024 - 2025",
                            title: "Youth Activity Leader",
                            location: "Beuvry",
                            description: "Supervision of young people and organisation of activities.",
                            icon: BriefcaseBusiness
                        },
                        {
                            date: "Volunteering",
                            title: "Volunteer — Emmaüs & Personal Assistance",
                            location: "Local area",
                            description: "Gardening, maintenance, and logistics support.",
                            icon: BriefcaseBusiness
                        }
                    ]}
                />
            </div>
        </div>
    )
}

function CareerColumn({ title, items }: CareerColumnProps) {
    return (
        <div className="flex flex-col gap-6 max-w-1/4">
            <div>
                <h3 className="font-semibold text-3xl">{title}</h3>
                <hr/>
            </div>
            <div className="flex flex-col gap-4">
                {items.map((item, index) => (
                    <TimelineItem key={index} {...item} />
                ))}
            </div>
        </div>
    )
}

function TimelineItem({ date, title, location, description, icon: Icon, isActive }: TimelineItem) {
    return (
        <div className="relative flex flex-col gap-2 border-l-3 pl-4   hover:border-l-green-400 border-l-green-300" >
            <div className="bg-green-400 rounded-full h-3 w-3 absolute -left-1.75"></div>
            {isActive && (
                <span className="bg-green-300 rounded-full h-3.5 w-3.5 animate-ping absolute -left-2"></span>
            )}

            <span className="text-l px-2 py-0.5 rounded-full border border-green-400/30 text-green-400/80 bg-green-400/5">
                {date}
            </span>
            <h3 className="font-semibold flex gap-2 items-center">
                <Icon className="w-5 h-5" />
                {title}
            </h3>
            <p className="flex gap-2 items-center">
                <MapPin className="w-4 h-4" />
                {location}
            </p>
            <p className="mt-3 text-white/80">{description}</p>
        </div>
    )
}

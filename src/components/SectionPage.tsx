import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section(props: { children: ReactNode, id?: string, bg?: string }) {
    return (
        <section
            id={props.id}
            className={cn(
                props.bg,
                "top-0 flex w-full flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8",
            )}
        >
            {props.children}
        </section>
    )
}
import {JSX, ReactNode} from "react";
import {cn} from "@/lib/utils";

export function Section(props: { children: ReactNode, id?: string, bg?: string }){
    return (
        <section
            id={props.id}
            className={cn(props.bg, "sticky rounded-4xl m-5  top-0 h-screen flex flex-col items-center justify-center")}>
            {props.children}
        </section>
    )
}
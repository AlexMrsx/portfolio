import { ReactNode} from "react";
import {cn} from "@/lib/utils";

export function Section(props: { children: ReactNode, id?: string, bg?: string }){
    return (
        <section
            id={props.id}
            className={cn(props.bg, "sm:sticky   my-2 top-0 sm:h-screen  flex flex-col items-center justify-center")}>
            {props.children}
        </section>
    )
}
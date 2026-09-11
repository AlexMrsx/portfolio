import { useSyncExternalStore } from "react";

const MOBILE_BREAKPOINT = 768;

function getSnapshot() {
    return typeof window !== "undefined" ? window.innerWidth < MOBILE_BREAKPOINT : false;
}

function subscribe(callback: () => void) {
    if (typeof window === "undefined") {
        return () => {};
    }

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => callback();

    mql.addEventListener("change", onChange);

    return () => {
        mql.removeEventListener("change", onChange);
    };
}

export function useIsMobile() {
    return useSyncExternalStore(subscribe, getSnapshot, () => false);
}

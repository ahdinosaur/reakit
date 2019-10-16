import * as React from "react";
export declare function useEventListenerOutside(containerRef: React.RefObject<HTMLElement>, disclosuresRef: React.RefObject<HTMLElement[]>, nestedDialogs: Array<React.RefObject<HTMLElement>>, event: string, listener?: (e: Event) => void, shouldListen?: boolean): void;

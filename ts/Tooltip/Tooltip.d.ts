import * as React from "react";
import { HiddenOptions, HiddenHTMLProps } from "../Hidden/Hidden";
import { TooltipStateReturn } from "./TooltipState";
export declare type TooltipOptions = HiddenOptions & Pick<Partial<TooltipStateReturn>, "unstable_popoverRef" | "unstable_popoverStyles">;
export declare type TooltipHTMLProps = HiddenHTMLProps;
export declare type TooltipProps = TooltipOptions & TooltipHTMLProps;
export declare const useTooltip: {
    (options?: TooltipOptions | undefined, htmlProps?: import("..").BoxHTMLProps | undefined): import("..").BoxHTMLProps;
    __keys: readonly any[];
    __propsAreEqual?: ((prev: import("..").BoxOptions & Pick<Partial<import("..").HiddenStateReturn>, "visible" | "unstable_hiddenId" | "unstable_animated" | "unstable_animating" | "unstable_stopAnimation" | "unstable_setIsMounted"> & Pick<Partial<import("..").PopoverStateReturn>, "unstable_popoverRef" | "unstable_popoverStyles"> & React.HTMLAttributes<any> & React.RefAttributes<any> & {
        unstable_wrap?: ((children: React.ReactNode) => JSX.Element) | undefined;
    }, next: import("..").BoxOptions & Pick<Partial<import("..").HiddenStateReturn>, "visible" | "unstable_hiddenId" | "unstable_animated" | "unstable_animating" | "unstable_stopAnimation" | "unstable_setIsMounted"> & Pick<Partial<import("..").PopoverStateReturn>, "unstable_popoverRef" | "unstable_popoverStyles"> & React.HTMLAttributes<any> & React.RefAttributes<any> & {
        unstable_wrap?: ((children: React.ReactNode) => JSX.Element) | undefined;
    }) => boolean) | undefined;
};
export declare const Tooltip: import("reakit-system/src/createComponent").Component<"div", TooltipOptions>;

import * as React from "react";
import { BoxOptions, BoxHTMLProps } from "../Box/Box";
import { PopoverStateReturn } from "./PopoverState";
export declare type PopoverArrowOptions = BoxOptions & Pick<Partial<PopoverStateReturn>, "unstable_arrowRef" | "unstable_arrowStyles"> & Pick<PopoverStateReturn, "placement"> & {
    /** Arrow's size */
    size?: number | string;
};
export declare type PopoverArrowHTMLProps = BoxHTMLProps;
export declare type PopoverArrowProps = PopoverArrowOptions & PopoverArrowHTMLProps;
export declare const usePopoverArrow: {
    (options?: PopoverArrowOptions | undefined, htmlProps?: BoxHTMLProps | undefined): BoxHTMLProps;
    __keys: readonly any[];
    __propsAreEqual?: ((prev: BoxOptions & Pick<Partial<PopoverStateReturn>, "unstable_arrowRef" | "unstable_arrowStyles"> & Pick<PopoverStateReturn, "placement"> & {
        /** Arrow's size */
        size?: string | number | undefined;
    } & React.HTMLAttributes<any> & React.RefAttributes<any> & {
        unstable_wrap?: ((children: React.ReactNode) => JSX.Element) | undefined;
    }, next: BoxOptions & Pick<Partial<PopoverStateReturn>, "unstable_arrowRef" | "unstable_arrowStyles"> & Pick<PopoverStateReturn, "placement"> & {
        /** Arrow's size */
        size?: string | number | undefined;
    } & React.HTMLAttributes<any> & React.RefAttributes<any> & {
        unstable_wrap?: ((children: React.ReactNode) => JSX.Element) | undefined;
    }) => boolean) | undefined;
};
export declare const PopoverArrow: import("reakit-system/src/createComponent").Component<"div", PopoverArrowOptions>;

/// <reference types="react" />
import { PopoverArrowOptions, PopoverArrowHTMLProps } from "../Popover/PopoverArrow";
export declare type TooltipArrowOptions = PopoverArrowOptions;
export declare type TooltipArrowHTMLProps = PopoverArrowHTMLProps;
export declare type TooltipArrowProps = TooltipArrowOptions & TooltipArrowHTMLProps;
export declare const useTooltipArrow: {
    (options?: PopoverArrowOptions | undefined, htmlProps?: import("..").BoxHTMLProps | undefined): import("..").BoxHTMLProps;
    __keys: readonly any[];
    __propsAreEqual?: ((prev: import("..").BoxOptions & Pick<Partial<import("..").PopoverStateReturn>, "unstable_arrowRef" | "unstable_arrowStyles"> & Pick<import("..").PopoverStateReturn, "placement"> & {
        size?: string | number | undefined;
    } & import("react").HTMLAttributes<any> & import("react").RefAttributes<any> & {
        unstable_wrap?: ((children: import("react").ReactNode) => JSX.Element) | undefined;
    }, next: import("..").BoxOptions & Pick<Partial<import("..").PopoverStateReturn>, "unstable_arrowRef" | "unstable_arrowStyles"> & Pick<import("..").PopoverStateReturn, "placement"> & {
        size?: string | number | undefined;
    } & import("react").HTMLAttributes<any> & import("react").RefAttributes<any> & {
        unstable_wrap?: ((children: import("react").ReactNode) => JSX.Element) | undefined;
    }) => boolean) | undefined;
};
export declare const TooltipArrow: import("reakit-system/src/createComponent").Component<"div", PopoverArrowOptions>;

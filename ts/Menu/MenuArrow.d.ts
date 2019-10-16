/// <reference types="react" />
import { PopoverArrowOptions, PopoverArrowHTMLProps } from "../Popover/PopoverArrow";
export declare type MenuArrowOptions = PopoverArrowOptions;
export declare type MenuArrowHTMLProps = PopoverArrowHTMLProps;
export declare type MenuArrowProps = MenuArrowOptions & MenuArrowHTMLProps;
export declare const useMenuArrow: {
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
export declare const MenuArrow: import("reakit-system/src/createComponent").Component<"div", PopoverArrowOptions>;

/// <reference types="react" />
import { RoverOptions, RoverHTMLProps } from "../Rover/Rover";
export declare type ToolbarItemOptions = RoverOptions;
export declare type ToolbarItemHTMLProps = RoverHTMLProps;
export declare type ToolbarItemProps = ToolbarItemOptions & ToolbarItemHTMLProps;
export declare const useToolbarItem: {
    (options?: RoverOptions | undefined, htmlProps?: import("..").TabbableHTMLProps | undefined): import("..").TabbableHTMLProps;
    __keys: readonly any[];
    __propsAreEqual?: ((prev: import("..").BoxOptions & {
        disabled?: boolean | undefined;
        focusable?: boolean | undefined;
        unstable_clickKeys?: string[] | undefined;
    } & Pick<Partial<import("..").RoverStateReturn>, "orientation" | "unstable_moves"> & Pick<import("..").RoverStateReturn, "move" | "first" | "last" | "currentId" | "stops" | "register" | "unregister" | "next" | "previous"> & {
        stopId?: string | undefined;
    } & import("react").HTMLAttributes<any> & import("react").RefAttributes<any> & {
        unstable_wrap?: ((children: import("react").ReactNode) => JSX.Element) | undefined;
    } & {
        disabled?: boolean | undefined;
    }, next: import("..").BoxOptions & {
        disabled?: boolean | undefined;
        focusable?: boolean | undefined;
        unstable_clickKeys?: string[] | undefined;
    } & Pick<Partial<import("..").RoverStateReturn>, "orientation" | "unstable_moves"> & Pick<import("..").RoverStateReturn, "move" | "first" | "last" | "currentId" | "stops" | "register" | "unregister" | "next" | "previous"> & {
        stopId?: string | undefined;
    } & import("react").HTMLAttributes<any> & import("react").RefAttributes<any> & {
        unstable_wrap?: ((children: import("react").ReactNode) => JSX.Element) | undefined;
    } & {
        disabled?: boolean | undefined;
    }) => boolean) | undefined;
};
export declare const ToolbarItem: import("reakit-system/src/createComponent").Component<"button", RoverOptions>;
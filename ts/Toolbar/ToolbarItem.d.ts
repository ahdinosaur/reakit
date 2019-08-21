import * as React from "react";
import { RoverOptions, RoverHTMLProps } from "../Rover/Rover";
export declare type ToolbarItemOptions = RoverOptions;
export declare type ToolbarItemHTMLProps = RoverHTMLProps & React.LiHTMLAttributes<any>;
export declare type ToolbarItemProps = ToolbarItemOptions & ToolbarItemHTMLProps;
export declare const useToolbarItem: {
    (options?: RoverOptions | undefined, htmlProps?: ToolbarItemHTMLProps | undefined): ToolbarItemHTMLProps;
    __keys: readonly any[];
    __propsAreEqual?: ((prev: import("..").BoxOptions & {
        disabled?: boolean | undefined;
        focusable?: boolean | undefined;
        unstable_clickKeys?: string[] | undefined;
    } & Pick<Partial<import("..").RoverStateReturn>, "orientation" | "unstable_moves"> & Pick<import("..").RoverStateReturn, "move" | "first" | "last" | "currentId" | "stops" | "register" | "unregister" | "next" | "previous"> & {
        stopId?: string | undefined;
    } & React.HTMLAttributes<any> & React.RefAttributes<any> & {
        unstable_wrap?: ((children: React.ReactNode) => JSX.Element) | undefined;
    } & {
        disabled?: boolean | undefined;
    } & React.LiHTMLAttributes<any>, next: import("..").BoxOptions & {
        disabled?: boolean | undefined;
        focusable?: boolean | undefined;
        unstable_clickKeys?: string[] | undefined;
    } & Pick<Partial<import("..").RoverStateReturn>, "orientation" | "unstable_moves"> & Pick<import("..").RoverStateReturn, "move" | "first" | "last" | "currentId" | "stops" | "register" | "unregister" | "next" | "previous"> & {
        stopId?: string | undefined;
    } & React.HTMLAttributes<any> & React.RefAttributes<any> & {
        unstable_wrap?: ((children: React.ReactNode) => JSX.Element) | undefined;
    } & {
        disabled?: boolean | undefined;
    } & React.LiHTMLAttributes<any>) => boolean) | undefined;
};
export declare const ToolbarItem: import("reakit-system/src/createComponent").Component<"button", RoverOptions>;

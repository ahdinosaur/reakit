import * as React from "react";
import { RoverOptions, RoverHTMLProps } from "../Rover/Rover";
import { MenuStateReturn } from "./MenuState";
export declare type MenuItemOptions = RoverOptions & Pick<Partial<MenuStateReturn>, "visible" | "hide" | "placement"> & Pick<MenuStateReturn, "next" | "previous" | "move">;
export declare type MenuItemHTMLProps = RoverHTMLProps;
export declare type MenuItemProps = MenuItemOptions & MenuItemHTMLProps;
export declare const useMenuItem: {
    (options?: MenuItemOptions | undefined, htmlProps?: import("..").TabbableHTMLProps | undefined): import("..").TabbableHTMLProps;
    __keys: readonly any[];
    __propsAreEqual?: ((prev: import("..").BoxOptions & {
        disabled?: boolean | undefined;
        focusable?: boolean | undefined;
        unstable_clickKeys?: string[] | undefined;
    } & Pick<Partial<import("..").RoverStateReturn>, "orientation" | "unstable_moves"> & Pick<import("..").RoverStateReturn, "move" | "first" | "last" | "currentId" | "stops" | "register" | "unregister" | "next" | "previous"> & {
        stopId?: string | undefined;
    } & Pick<Partial<MenuStateReturn>, "visible" | "hide" | "placement"> & Pick<MenuStateReturn, "move" | "next" | "previous"> & React.HTMLAttributes<any> & React.RefAttributes<any> & {
        unstable_wrap?: ((children: React.ReactNode) => JSX.Element) | undefined;
    } & {
        disabled?: boolean | undefined;
    }, next: import("..").BoxOptions & {
        disabled?: boolean | undefined;
        focusable?: boolean | undefined;
        unstable_clickKeys?: string[] | undefined;
    } & Pick<Partial<import("..").RoverStateReturn>, "orientation" | "unstable_moves"> & Pick<import("..").RoverStateReturn, "move" | "first" | "last" | "currentId" | "stops" | "register" | "unregister" | "next" | "previous"> & {
        stopId?: string | undefined;
    } & Pick<Partial<MenuStateReturn>, "visible" | "hide" | "placement"> & Pick<MenuStateReturn, "move" | "next" | "previous"> & React.HTMLAttributes<any> & React.RefAttributes<any> & {
        unstable_wrap?: ((children: React.ReactNode) => JSX.Element) | undefined;
    } & {
        disabled?: boolean | undefined;
    }) => boolean) | undefined;
};
export declare const MenuItem: import("reakit-system/src/createComponent").Component<"button", MenuItemOptions>;

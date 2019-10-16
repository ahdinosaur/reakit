import * as React from "react";
import { RoverOptions, RoverHTMLProps } from "../Rover/Rover";
import { TabStateReturn } from "./TabState";
export declare type TabOptions = RoverOptions & Pick<Required<RoverOptions>, "stopId"> & Pick<Partial<TabStateReturn>, "manual"> & Pick<TabStateReturn, "unstable_baseId" | "selectedId" | "select">;
export declare type TabHTMLProps = RoverHTMLProps;
export declare type TabProps = TabOptions & TabHTMLProps;
export declare const useTab: {
    (options?: TabOptions | undefined, htmlProps?: import("..").TabbableHTMLProps | undefined): import("..").TabbableHTMLProps;
    __keys: readonly any[];
    __propsAreEqual?: ((prev: import("..").BoxOptions & {
        disabled?: boolean | undefined;
        focusable?: boolean | undefined;
        unstable_clickKeys?: string[] | undefined;
    } & Pick<Partial<import("..").RoverStateReturn>, "orientation" | "unstable_moves"> & Pick<import("..").RoverStateReturn, "move" | "first" | "last" | "currentId" | "stops" | "register" | "unregister" | "next" | "previous"> & {
        stopId?: string | undefined;
    } & Pick<Required<RoverOptions>, "stopId"> & Pick<Partial<TabStateReturn>, "manual"> & Pick<TabStateReturn, "select" | "selectedId" | "unstable_baseId"> & React.HTMLAttributes<any> & React.RefAttributes<any> & {
        unstable_wrap?: ((children: React.ReactNode) => JSX.Element) | undefined;
    } & {
        disabled?: boolean | undefined;
    }, next: import("..").BoxOptions & {
        disabled?: boolean | undefined;
        focusable?: boolean | undefined;
        unstable_clickKeys?: string[] | undefined;
    } & Pick<Partial<import("..").RoverStateReturn>, "orientation" | "unstable_moves"> & Pick<import("..").RoverStateReturn, "move" | "first" | "last" | "currentId" | "stops" | "register" | "unregister" | "next" | "previous"> & {
        stopId?: string | undefined;
    } & Pick<Required<RoverOptions>, "stopId"> & Pick<Partial<TabStateReturn>, "manual"> & Pick<TabStateReturn, "select" | "selectedId" | "unstable_baseId"> & React.HTMLAttributes<any> & React.RefAttributes<any> & {
        unstable_wrap?: ((children: React.ReactNode) => JSX.Element) | undefined;
    } & {
        disabled?: boolean | undefined;
    }) => boolean) | undefined;
};
export declare const Tab: import("reakit-system/src/createComponent").Component<"button", TabOptions>;

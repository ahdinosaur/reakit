import * as React from "react";
import { RadioOptions, RadioHTMLProps } from "../Radio/Radio";
import { MenuStateReturn } from "./MenuState";
import { MenuItemOptions, MenuItemHTMLProps } from "./MenuItem";
export declare type MenuItemRadioOptions = RadioOptions & MenuItemOptions & Pick<MenuStateReturn, "unstable_values" | "unstable_update"> & {
    /**
     * MenuItemRadio's name as in `menu.values`.
     */
    name: string;
};
export declare type MenuItemRadioHTMLProps = RadioHTMLProps & MenuItemHTMLProps;
export declare type MenuItemRadioProps = MenuItemRadioOptions & MenuItemRadioHTMLProps;
export declare const useMenuItemRadio: {
    (options?: MenuItemRadioOptions | undefined, htmlProps?: import("..").CheckboxHTMLProps | undefined): import("..").CheckboxHTMLProps;
    __keys: readonly any[];
    __propsAreEqual?: ((prev: Pick<import("..").RoverOptions, "move" | "first" | "last" | "disabled" | "unstable_system" | "focusable" | "orientation" | "currentId" | "stops" | "unstable_moves" | "register" | "unregister" | "next" | "previous" | "stopId"> & Pick<Partial<import("..").RadioStateReturn>, "state" | "setState"> & {
        value: any;
        checked?: boolean | undefined;
    } & import("..").BoxOptions & {
        disabled?: boolean | undefined;
        focusable?: boolean | undefined;
        unstable_clickKeys?: string[] | undefined;
    } & Pick<Partial<import("..").RoverStateReturn>, "orientation" | "unstable_moves"> & Pick<import("..").RoverStateReturn, "move" | "first" | "last" | "currentId" | "stops" | "register" | "unregister" | "next" | "previous"> & {
        stopId?: string | undefined;
    } & Pick<Partial<MenuStateReturn>, "visible" | "hide" | "placement"> & Pick<MenuStateReturn, "move" | "next" | "previous"> & Pick<MenuStateReturn, "unstable_values" | "unstable_update"> & {
        /**
         * MenuItemRadio's name as in `menu.values`.
         */
        name: string;
    } & React.HTMLAttributes<any> & React.RefAttributes<any> & {
        unstable_wrap?: ((children: React.ReactNode) => JSX.Element) | undefined;
    } & {
        disabled?: boolean | undefined;
    } & React.InputHTMLAttributes<any>, next: Pick<import("..").RoverOptions, "move" | "first" | "last" | "disabled" | "unstable_system" | "focusable" | "orientation" | "currentId" | "stops" | "unstable_moves" | "register" | "unregister" | "next" | "previous" | "stopId"> & Pick<Partial<import("..").RadioStateReturn>, "state" | "setState"> & {
        value: any;
        checked?: boolean | undefined;
    } & import("..").BoxOptions & {
        disabled?: boolean | undefined;
        focusable?: boolean | undefined;
        unstable_clickKeys?: string[] | undefined;
    } & Pick<Partial<import("..").RoverStateReturn>, "orientation" | "unstable_moves"> & Pick<import("..").RoverStateReturn, "move" | "first" | "last" | "currentId" | "stops" | "register" | "unregister" | "next" | "previous"> & {
        stopId?: string | undefined;
    } & Pick<Partial<MenuStateReturn>, "visible" | "hide" | "placement"> & Pick<MenuStateReturn, "move" | "next" | "previous"> & Pick<MenuStateReturn, "unstable_values" | "unstable_update"> & {
        /**
         * MenuItemRadio's name as in `menu.values`.
         */
        name: string;
    } & React.HTMLAttributes<any> & React.RefAttributes<any> & {
        unstable_wrap?: ((children: React.ReactNode) => JSX.Element) | undefined;
    } & {
        disabled?: boolean | undefined;
    } & React.InputHTMLAttributes<any>) => boolean) | undefined;
};
export declare const MenuItemRadio: import("reakit-system/src/createComponent").Component<"button", MenuItemRadioOptions>;

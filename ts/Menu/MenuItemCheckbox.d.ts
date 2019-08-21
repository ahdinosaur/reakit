import * as React from "react";
import { CheckboxOptions, CheckboxHTMLProps } from "../Checkbox/Checkbox";
import { MenuItemOptions, MenuItemHTMLProps } from "./MenuItem";
import { MenuStateReturn } from "./MenuState";
export declare type MenuItemCheckboxOptions = CheckboxOptions & MenuItemOptions & Pick<MenuStateReturn, "unstable_values" | "unstable_update"> & {
    /**
     * MenuItemCheckbox's name as in `menu.values`.
     */
    name: string;
};
export declare type MenuItemCheckboxHTMLProps = CheckboxHTMLProps & MenuItemHTMLProps;
export declare type MenuItemCheckboxProps = MenuItemCheckboxOptions & MenuItemCheckboxHTMLProps;
export declare const useMenuItemCheckbox: {
    (options?: MenuItemCheckboxOptions | undefined, htmlProps?: CheckboxHTMLProps | undefined): CheckboxHTMLProps;
    __keys: readonly any[];
    __propsAreEqual?: ((prev: Pick<import("..").TabbableOptions, "disabled" | "unstable_system" | "focusable"> & Pick<Partial<import("..").CheckboxStateReturn>, "state" | "setState"> & {
        value?: any;
        checked?: boolean | undefined;
    } & import("..").BoxOptions & {
        disabled?: boolean | undefined;
        focusable?: boolean | undefined;
        unstable_clickKeys?: string[] | undefined;
    } & Pick<Partial<import("..").RoverStateReturn>, "orientation" | "unstable_moves"> & Pick<import("..").RoverStateReturn, "move" | "first" | "last" | "currentId" | "stops" | "register" | "unregister" | "next" | "previous"> & {
        stopId?: string | undefined;
    } & Pick<Partial<MenuStateReturn>, "visible" | "hide" | "placement"> & Pick<MenuStateReturn, "move" | "next" | "previous"> & Pick<MenuStateReturn, "unstable_values" | "unstable_update"> & {
        /**
         * MenuItemCheckbox's name as in `menu.values`.
         */
        name: string;
    } & React.HTMLAttributes<any> & React.RefAttributes<any> & {
        unstable_wrap?: ((children: React.ReactNode) => JSX.Element) | undefined;
    } & {
        disabled?: boolean | undefined;
    } & React.InputHTMLAttributes<any>, next: Pick<import("..").TabbableOptions, "disabled" | "unstable_system" | "focusable"> & Pick<Partial<import("..").CheckboxStateReturn>, "state" | "setState"> & {
        value?: any;
        checked?: boolean | undefined;
    } & import("..").BoxOptions & {
        disabled?: boolean | undefined;
        focusable?: boolean | undefined;
        unstable_clickKeys?: string[] | undefined;
    } & Pick<Partial<import("..").RoverStateReturn>, "orientation" | "unstable_moves"> & Pick<import("..").RoverStateReturn, "move" | "first" | "last" | "currentId" | "stops" | "register" | "unregister" | "next" | "previous"> & {
        stopId?: string | undefined;
    } & Pick<Partial<MenuStateReturn>, "visible" | "hide" | "placement"> & Pick<MenuStateReturn, "move" | "next" | "previous"> & Pick<MenuStateReturn, "unstable_values" | "unstable_update"> & {
        /**
         * MenuItemCheckbox's name as in `menu.values`.
         */
        name: string;
    } & React.HTMLAttributes<any> & React.RefAttributes<any> & {
        unstable_wrap?: ((children: React.ReactNode) => JSX.Element) | undefined;
    } & {
        disabled?: boolean | undefined;
    } & React.InputHTMLAttributes<any>) => boolean) | undefined;
};
export declare const MenuItemCheckbox: import("reakit-system/src/createComponent").Component<"button", MenuItemCheckboxOptions>;

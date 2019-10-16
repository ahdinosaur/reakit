import * as React from "react";
import { PopoverDisclosureOptions, PopoverDisclosureHTMLProps } from "../Popover/PopoverDisclosure";
import { MenuStateReturn } from "./MenuState";
export declare type MenuDisclosureOptions = PopoverDisclosureOptions & Pick<Partial<MenuStateReturn>, "hide"> & Pick<MenuStateReturn, "show" | "placement" | "first" | "last">;
export declare type MenuDisclosureHTMLProps = PopoverDisclosureHTMLProps;
export declare type MenuDisclosureProps = MenuDisclosureOptions & MenuDisclosureHTMLProps;
export declare const useMenuDisclosure: {
    (options?: MenuDisclosureOptions | undefined, htmlProps?: import("..").ButtonHTMLProps | undefined): import("..").ButtonHTMLProps;
    __keys: readonly any[];
    __propsAreEqual?: ((prev: import("..").BoxOptions & {
        disabled?: boolean | undefined;
        focusable?: boolean | undefined;
        unstable_clickKeys?: string[] | undefined;
    } & Pick<Partial<import("..").HiddenStateReturn>, "visible"> & Pick<import("..").HiddenStateReturn, "unstable_hiddenId" | "toggle"> & Pick<Partial<import("..").PopoverStateReturn>, "unstable_referenceRef"> & Pick<Partial<MenuStateReturn>, "hide"> & Pick<MenuStateReturn, "show" | "first" | "last" | "placement"> & React.HTMLAttributes<any> & React.RefAttributes<any> & {
        unstable_wrap?: ((children: React.ReactNode) => JSX.Element) | undefined;
    } & {
        disabled?: boolean | undefined;
    } & React.ButtonHTMLAttributes<any>, next: import("..").BoxOptions & {
        disabled?: boolean | undefined;
        focusable?: boolean | undefined;
        unstable_clickKeys?: string[] | undefined;
    } & Pick<Partial<import("..").HiddenStateReturn>, "visible"> & Pick<import("..").HiddenStateReturn, "unstable_hiddenId" | "toggle"> & Pick<Partial<import("..").PopoverStateReturn>, "unstable_referenceRef"> & Pick<Partial<MenuStateReturn>, "hide"> & Pick<MenuStateReturn, "show" | "first" | "last" | "placement"> & React.HTMLAttributes<any> & React.RefAttributes<any> & {
        unstable_wrap?: ((children: React.ReactNode) => JSX.Element) | undefined;
    } & {
        disabled?: boolean | undefined;
    } & React.ButtonHTMLAttributes<any>) => boolean) | undefined;
};
export declare const MenuDisclosure: import("reakit-system/src/createComponent").Component<"button", MenuDisclosureOptions>;
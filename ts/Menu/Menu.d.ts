import * as React from "react";
import { Omit } from "reakit-utils/types";
import { PopoverOptions, PopoverHTMLProps } from "../Popover/Popover";
import { MenuBarOptions, MenuBarHTMLProps } from "./MenuBar";
import { MenuStateReturn } from "./MenuState";
export declare type MenuOptions = Omit<PopoverOptions, "hideOnEsc"> & Pick<MenuStateReturn, "placement"> & Pick<Partial<MenuStateReturn>, "first" | "last"> & MenuBarOptions;
export declare type MenuHTMLProps = PopoverHTMLProps & MenuBarHTMLProps;
export declare type MenuProps = MenuOptions & MenuHTMLProps;
export declare const useMenu: {
    (options?: MenuOptions | undefined, htmlProps?: import("..").BoxHTMLProps | undefined): import("..").BoxHTMLProps;
    __keys: readonly any[];
    __propsAreEqual?: ((prev: Pick<PopoverOptions, "visible" | "hide" | "unstable_system" | "unstable_hiddenId" | "unstable_animated" | "unstable_animating" | "unstable_stopAnimation" | "unstable_setIsMounted" | "modal" | "hideOnClickOutside" | "preventBodyScroll" | "unstable_initialFocusRef" | "unstable_finalFocusRef" | "unstable_portal" | "unstable_orphan" | "unstable_autoFocusOnShow" | "unstable_autoFocusOnHide" | "unstable_popoverRef" | "unstable_popoverStyles"> & Pick<MenuStateReturn, "placement"> & Pick<Partial<MenuStateReturn>, "first" | "last"> & import("..").BoxOptions & Pick<Partial<MenuStateReturn>, "orientation"> & Pick<MenuStateReturn, "move" | "stops" | "next" | "previous"> & React.HTMLAttributes<any> & React.RefAttributes<any> & {
        unstable_wrap?: ((children: React.ReactNode) => JSX.Element) | undefined;
    }, next: Pick<PopoverOptions, "visible" | "hide" | "unstable_system" | "unstable_hiddenId" | "unstable_animated" | "unstable_animating" | "unstable_stopAnimation" | "unstable_setIsMounted" | "modal" | "hideOnClickOutside" | "preventBodyScroll" | "unstable_initialFocusRef" | "unstable_finalFocusRef" | "unstable_portal" | "unstable_orphan" | "unstable_autoFocusOnShow" | "unstable_autoFocusOnHide" | "unstable_popoverRef" | "unstable_popoverStyles"> & Pick<MenuStateReturn, "placement"> & Pick<Partial<MenuStateReturn>, "first" | "last"> & import("..").BoxOptions & Pick<Partial<MenuStateReturn>, "orientation"> & Pick<MenuStateReturn, "move" | "stops" | "next" | "previous"> & React.HTMLAttributes<any> & React.RefAttributes<any> & {
        unstable_wrap?: ((children: React.ReactNode) => JSX.Element) | undefined;
    }) => boolean) | undefined;
};
export declare const Menu: import("reakit-system/src/createComponent").Component<"div", MenuOptions>;

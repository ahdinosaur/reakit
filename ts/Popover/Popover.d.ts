/// <reference types="react" />
import { DialogOptions, DialogHTMLProps } from "../Dialog/Dialog";
import { PopoverStateReturn } from "./PopoverState";
export declare type PopoverOptions = DialogOptions & Pick<Partial<PopoverStateReturn>, "unstable_popoverRef" | "unstable_popoverStyles">;
export declare type PopoverHTMLProps = DialogHTMLProps;
export declare type PopoverProps = PopoverOptions & PopoverHTMLProps;
export declare const usePopover: {
    (options?: PopoverOptions | undefined, htmlProps?: import("..").BoxHTMLProps | undefined): import("..").BoxHTMLProps;
    __keys: readonly any[];
    __propsAreEqual?: ((prev: import("..").BoxOptions & Pick<Partial<import("..").HiddenStateReturn>, "visible" | "unstable_hiddenId" | "unstable_animated" | "unstable_animating" | "unstable_stopAnimation" | "unstable_setIsMounted"> & Pick<Partial<import("..").HiddenStateReturn>, "hide"> & Pick<import("..").HiddenStateReturn, "unstable_hiddenId"> & {
        modal?: boolean | undefined;
        hideOnEsc?: boolean | undefined;
        hideOnClickOutside?: boolean | undefined;
        preventBodyScroll?: boolean | undefined;
        unstable_initialFocusRef?: import("react").RefObject<HTMLElement> | undefined;
        unstable_finalFocusRef?: import("react").RefObject<HTMLElement> | undefined;
        unstable_portal?: boolean | undefined;
        unstable_orphan?: boolean | undefined;
        unstable_autoFocusOnShow?: boolean | undefined;
        unstable_autoFocusOnHide?: boolean | undefined;
    } & Pick<Partial<PopoverStateReturn>, "unstable_popoverRef" | "unstable_popoverStyles"> & import("react").HTMLAttributes<any> & import("react").RefAttributes<any> & {
        unstable_wrap?: ((children: import("react").ReactNode) => JSX.Element) | undefined;
    }, next: import("..").BoxOptions & Pick<Partial<import("..").HiddenStateReturn>, "visible" | "unstable_hiddenId" | "unstable_animated" | "unstable_animating" | "unstable_stopAnimation" | "unstable_setIsMounted"> & Pick<Partial<import("..").HiddenStateReturn>, "hide"> & Pick<import("..").HiddenStateReturn, "unstable_hiddenId"> & {
        modal?: boolean | undefined;
        hideOnEsc?: boolean | undefined;
        hideOnClickOutside?: boolean | undefined;
        preventBodyScroll?: boolean | undefined;
        unstable_initialFocusRef?: import("react").RefObject<HTMLElement> | undefined;
        unstable_finalFocusRef?: import("react").RefObject<HTMLElement> | undefined;
        unstable_portal?: boolean | undefined;
        unstable_orphan?: boolean | undefined;
        unstable_autoFocusOnShow?: boolean | undefined;
        unstable_autoFocusOnHide?: boolean | undefined;
    } & Pick<Partial<PopoverStateReturn>, "unstable_popoverRef" | "unstable_popoverStyles"> & import("react").HTMLAttributes<any> & import("react").RefAttributes<any> & {
        unstable_wrap?: ((children: import("react").ReactNode) => JSX.Element) | undefined;
    }) => boolean) | undefined;
};
export declare const Popover: import("reakit-system/src/createComponent").Component<"div", PopoverOptions>;

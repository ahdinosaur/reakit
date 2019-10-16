import * as React from "react";
import { Omit } from "reakit-utils/types";
import { RoverOptions, RoverHTMLProps } from "../Rover/Rover";
import { RadioStateReturn } from "./RadioState";
export declare type RadioOptions = Omit<RoverOptions, "unstable_clickKeys"> & Pick<Partial<RadioStateReturn>, "state" | "setState"> & {
    /**
     * Same as the `value` attribute.
     */
    value: any;
    /**
     * Same as the `checked` attribute.
     */
    checked?: boolean;
};
export declare type RadioHTMLProps = RoverHTMLProps & React.InputHTMLAttributes<any>;
export declare type RadioProps = RadioOptions & RadioHTMLProps;
export declare const useRadio: {
    (options?: RadioOptions | undefined, htmlProps?: import("..").CheckboxHTMLProps | undefined): import("..").CheckboxHTMLProps;
    __keys: readonly any[];
    __propsAreEqual?: ((prev: Pick<RoverOptions, "move" | "first" | "last" | "disabled" | "unstable_system" | "focusable" | "orientation" | "currentId" | "stops" | "unstable_moves" | "register" | "unregister" | "next" | "previous" | "stopId"> & Pick<Partial<RadioStateReturn>, "state" | "setState"> & {
        /**
         * Same as the `value` attribute.
         */
        value: any;
        /**
         * Same as the `checked` attribute.
         */
        checked?: boolean | undefined;
    } & React.HTMLAttributes<any> & React.RefAttributes<any> & {
        unstable_wrap?: ((children: React.ReactNode) => JSX.Element) | undefined;
    } & {
        disabled?: boolean | undefined;
    } & React.InputHTMLAttributes<any>, next: Pick<RoverOptions, "move" | "first" | "last" | "disabled" | "unstable_system" | "focusable" | "orientation" | "currentId" | "stops" | "unstable_moves" | "register" | "unregister" | "next" | "previous" | "stopId"> & Pick<Partial<RadioStateReturn>, "state" | "setState"> & {
        /**
         * Same as the `value` attribute.
         */
        value: any;
        /**
         * Same as the `checked` attribute.
         */
        checked?: boolean | undefined;
    } & React.HTMLAttributes<any> & React.RefAttributes<any> & {
        unstable_wrap?: ((children: React.ReactNode) => JSX.Element) | undefined;
    } & {
        disabled?: boolean | undefined;
    } & React.InputHTMLAttributes<any>) => boolean) | undefined;
};
export declare const Radio: import("reakit-system/src/createComponent").Component<"input", RadioOptions>;

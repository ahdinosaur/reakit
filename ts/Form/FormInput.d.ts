import * as React from "react";
import { PropsWithAs, Omit } from "reakit-utils/types";
import { TabbableOptions, TabbableHTMLProps } from "../Tabbable/Tabbable";
import { DeepPath } from "./__utils/types";
import { unstable_FormStateReturn } from "./FormState";
export declare type unstable_FormInputOptions<V, P extends DeepPath<V, P>> = Omit<TabbableOptions, "unstable_clickKeys"> & Pick<unstable_FormStateReturn<V>, "baseId" | "values" | "touched" | "errors" | "update" | "blur"> & {
    /**
     * FormInput's name as in form values.
     */
    name: P;
};
export declare type unstable_FormInputHTMLProps = TabbableHTMLProps & React.InputHTMLAttributes<any>;
export declare type unstable_FormInputProps<V, P extends DeepPath<V, P>> = unstable_FormInputOptions<V, P> & unstable_FormInputHTMLProps;
export declare const unstable_useFormInput: <V, P extends DeepPath<V, P>>(options: unstable_FormInputOptions<V, P>, htmlProps?: import("..").CheckboxHTMLProps | undefined) => import("..").CheckboxHTMLProps;
export declare const unstable_FormInput: <V, P extends DeepPath<V, P>, T extends React.ElementType<any> = "input">(props: PropsWithAs<unstable_FormInputOptions<V, P>, T>) => JSX.Element;

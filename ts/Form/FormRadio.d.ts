import * as React from "react";
import { PropsWithAs } from "reakit-utils/types";
import { RadioHTMLProps } from "../Radio/Radio";
import { BoxOptions } from "../Box";
import { unstable_FormStateReturn } from "./FormState";
import { DeepPath, DeepPathValue } from "./__utils/types";
export declare type unstable_FormRadioOptions<V, P extends DeepPath<V, P>> = BoxOptions & Pick<unstable_FormStateReturn<V>, "values" | "update" | "blur"> & {
    /**
     * FormRadio's name as in form values.
     */
    name: P;
    /**
     * FormRadio's value.
     */
    value: DeepPathValue<V, P>;
};
export declare type unstable_FormRadioHTMLProps = RadioHTMLProps;
export declare type unstable_FormRadioProps<V, P extends DeepPath<V, P>> = unstable_FormRadioOptions<V, P> & unstable_FormRadioHTMLProps;
export declare const unstable_useFormRadio: <V, P extends DeepPath<V, P>>(options: unstable_FormRadioOptions<V, P>, htmlProps?: import("..").CheckboxHTMLProps | undefined) => import("..").CheckboxHTMLProps;
export declare const unstable_FormRadio: <V, P extends DeepPath<V, P>, T extends React.ElementType<any> = "input">(props: PropsWithAs<unstable_FormRadioOptions<V, P>, T>) => JSX.Element;
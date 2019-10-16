import * as React from "react";
import { SealedInitialState } from "reakit-utils/useSealedState";
export declare type HiddenState = {
    /**
     * Hidden element ID.
     * @private
     */
    unstable_hiddenId: string;
    /**
     * Whether it's visible or not.
     */
    visible: boolean;
    /**
     * If `true`, `animating` will be set to `true` when `visible` changes.
     * It'll wait for `stopAnimation` to be called or a CSS transition ends.
     * If it's a number, `stopAnimation` will be called automatically after
     * given milliseconds.
     */
    unstable_animated: boolean | number;
    /**
     * Whether it's animating or not.
     * @private
     */
    unstable_animating: boolean;
};
export declare type HiddenActions = {
    /**
     * Changes the `visible` state to `true`
     */
    show: () => void;
    /**
     * Changes the `visible` state to `false`
     */
    hide: () => void;
    /**
     * Toggles the `visible` state
     */
    toggle: () => void;
    /**
     * Stops animation. It's called automatically if there's a CSS transition.
     * It's called after given milliseconds if `animated` is a number.
     */
    unstable_stopAnimation: () => void;
    /**
     * @private
     */
    unstable_setIsMounted?: React.Dispatch<React.SetStateAction<boolean>>;
};
export declare type HiddenInitialState = Partial<Pick<HiddenState, "unstable_hiddenId" | "visible" | "unstable_animated">> & {
    /**
     * @private
     */
    unstable_isMounted?: boolean;
};
export declare type HiddenStateReturn = HiddenState & HiddenActions;
export declare function useHiddenState(initialState?: SealedInitialState<HiddenInitialState>): HiddenStateReturn;
export declare namespace useHiddenState {
    var __keys: ("visible" | "hide" | "show" | "unstable_hiddenId" | "unstable_animated" | "unstable_animating" | "toggle" | "unstable_stopAnimation" | "unstable_setIsMounted")[];
}
import * as React from "react";
import Popper from "popper.js";
import { SealedInitialState } from "reakit-utils/useSealedState";
import { DialogState, DialogActions, DialogInitialState } from "../Dialog/DialogState";
declare type Placement = "auto-start" | "auto" | "auto-end" | "top-start" | "top" | "top-end" | "right-start" | "right" | "right-end" | "bottom-end" | "bottom" | "bottom-start" | "left-end" | "left" | "left-start";
export declare type PopoverState = DialogState & {
    /**
     * The reference element.
     */
    unstable_referenceRef: React.RefObject<HTMLElement | null>;
    /**
     * The popover element.
     * @private
     */
    unstable_popoverRef: React.RefObject<HTMLElement | null>;
    /**
     * The arrow element.
     * @private
     */
    unstable_arrowRef: React.RefObject<HTMLElement | null>;
    /**
     * Popover styles.
     * @private
     */
    unstable_popoverStyles: React.CSSProperties;
    /**
     * Arrow styles.
     * @private
     */
    unstable_arrowStyles: React.CSSProperties;
    /**
     * `placement` passed to the hook.
     * @private
     */
    unstable_originalPlacement: Placement;
    /**
     * @private
     */
    unstable_scheduleUpdate: () => boolean;
    /**
     * @private
     */
    unstable_update: () => boolean;
    /**
     * Actual `placement`.
     */
    placement: Placement;
};
export declare type PopoverActions = DialogActions & {
    /**
     * Change the `placement` state.
     */
    place: React.Dispatch<React.SetStateAction<Placement>>;
};
export declare type PopoverInitialState = DialogInitialState & Partial<Pick<PopoverState, "placement">> & {
    /**
     * Whether or not the popover should have `position` set to `fixed`.
     */
    unstable_fixed?: boolean;
    /**
     * Flip the popover's placement when it starts to overlap its reference
     * element.
     */
    unstable_flip?: boolean;
    /**
     * Shift popover on the start or end of its reference element.
     */
    unstable_shift?: boolean;
    /**
     * Offset between the reference and the popover.
     */
    gutter?: number;
    /**
     * Prevents popover from being positioned outside the boundary.
     */
    unstable_preventOverflow?: boolean;
    /**
     * Boundaries element used by `preventOverflow`.
     */
    unstable_boundariesElement?: Popper.Boundary;
};
export declare type PopoverStateReturn = PopoverState & PopoverActions;
export declare function usePopoverState(initialState?: SealedInitialState<PopoverInitialState>): PopoverStateReturn;
export declare namespace usePopoverState {
    var __keys: ("visible" | "hide" | "show" | "unstable_hiddenId" | "unstable_animated" | "unstable_animating" | "toggle" | "unstable_stopAnimation" | "unstable_setIsMounted" | "placement" | "unstable_referenceRef" | "unstable_popoverRef" | "unstable_arrowRef" | "unstable_popoverStyles" | "unstable_arrowStyles" | "unstable_originalPlacement" | "unstable_scheduleUpdate" | "unstable_update" | "place")[];
}
export {};

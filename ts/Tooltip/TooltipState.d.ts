import { SealedInitialState } from "reakit-utils/useSealedState";
import { PopoverState, PopoverActions, PopoverInitialState } from "../Popover/PopoverState";
export declare type TooltipState = PopoverState;
export declare type TooltipActions = PopoverActions;
export declare type TooltipInitialState = PopoverInitialState;
export declare type TooltipStateReturn = TooltipState & TooltipActions;
export declare function useTooltipState(initialState?: SealedInitialState<TooltipInitialState>): TooltipStateReturn;
export declare namespace useTooltipState {
    var __keys: ("visible" | "hide" | "show" | "unstable_hiddenId" | "unstable_animated" | "unstable_animating" | "toggle" | "unstable_stopAnimation" | "unstable_setIsMounted" | "placement" | "unstable_referenceRef" | "unstable_popoverRef" | "unstable_arrowRef" | "unstable_popoverStyles" | "unstable_arrowStyles" | "unstable_originalPlacement" | "unstable_scheduleUpdate" | "unstable_update" | "place")[];
}

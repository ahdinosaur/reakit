import { SealedInitialState } from "reakit-utils/useSealedState";
import { PopoverState, PopoverActions, PopoverInitialState } from "../Popover/PopoverState";
import { MenuBarState, MenuBarActions, MenuBarInitialState } from "./MenuBarState";
export declare type MenuState = MenuBarState & PopoverState;
export declare type MenuActions = MenuBarActions & PopoverActions;
export declare type MenuInitialState = MenuBarInitialState & PopoverInitialState;
export declare type MenuStateReturn = MenuState & MenuActions;
export declare function useMenuState(initialState?: SealedInitialState<MenuInitialState>): MenuStateReturn;
export declare namespace useMenuState {
    var __keys: ("visible" | "move" | "hide" | "show" | "first" | "last" | "unstable_hiddenId" | "unstable_animated" | "unstable_animating" | "toggle" | "unstable_stopAnimation" | "unstable_setIsMounted" | "orientation" | "currentId" | "loop" | "stops" | "unstable_pastId" | "unstable_moves" | "register" | "unregister" | "next" | "previous" | "unstable_reset" | "unstable_orientate" | "placement" | "unstable_referenceRef" | "unstable_popoverRef" | "unstable_arrowRef" | "unstable_popoverStyles" | "unstable_arrowStyles" | "unstable_originalPlacement" | "unstable_scheduleUpdate" | "unstable_update" | "place" | "unstable_values")[];
}

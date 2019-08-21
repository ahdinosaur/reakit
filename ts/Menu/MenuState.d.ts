import { SealedInitialState } from "reakit-utils/useSealedState";
import { PopoverState, PopoverActions, PopoverInitialState } from "../Popover/PopoverState";
import { RoverState, RoverActions, RoverInitialState } from "../Rover";
export declare type MenuState = RoverState & PopoverState & {
    /**
     * Stores the values of radios and checkboxes within the menu.
     */
    unstable_values: Record<string, any>;
};
export declare type MenuActions = RoverActions & PopoverActions & {
    /**
     * Updates checkboxes and radios values within the menu.
     */
    unstable_update: (name: string, value?: any) => void;
};
export declare type MenuInitialState = RoverInitialState & PopoverInitialState & Partial<Pick<MenuState, "unstable_values">>;
export declare type MenuStateReturn = MenuState & MenuActions;
export declare function useMenuState(initialState?: SealedInitialState<MenuInitialState>): MenuStateReturn;
export declare namespace useMenuState {
    var __keys: ("visible" | "move" | "hide" | "show" | "first" | "last" | "unstable_hiddenId" | "unstable_animated" | "unstable_animating" | "toggle" | "unstable_stopAnimation" | "unstable_setIsMounted" | "orientation" | "currentId" | "loop" | "stops" | "unstable_pastId" | "unstable_moves" | "register" | "unregister" | "next" | "previous" | "unstable_reset" | "unstable_orientate" | "placement" | "unstable_referenceRef" | "unstable_popoverRef" | "unstable_arrowRef" | "unstable_popoverStyles" | "unstable_arrowStyles" | "unstable_originalPlacement" | "place" | "unstable_values" | "unstable_update")[];
}

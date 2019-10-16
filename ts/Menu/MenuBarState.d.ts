import { SealedInitialState } from "reakit-utils/useSealedState";
import { RoverState, RoverActions, RoverInitialState } from "../Rover";
export declare type MenuBarState = RoverState & {
    /**
     * Stores the values of radios and checkboxes within the menu.
     */
    unstable_values: Record<string, any>;
};
export declare type MenuBarActions = RoverActions & {
    /**
     * Updates checkboxes and radios values within the menu.
     */
    unstable_update: (name: string, value?: any) => void;
};
export declare type MenuBarInitialState = RoverInitialState & Partial<Pick<MenuBarState, "unstable_values">>;
export declare type MenuBarStateReturn = MenuBarState & MenuBarActions;
export declare function useMenuBarState(initialState?: SealedInitialState<MenuBarInitialState>): MenuBarStateReturn;
export declare namespace useMenuBarState {
    var __keys: ("move" | "first" | "last" | "orientation" | "currentId" | "loop" | "stops" | "unstable_pastId" | "unstable_moves" | "register" | "unregister" | "next" | "previous" | "unstable_reset" | "unstable_orientate" | "unstable_update" | "unstable_values")[];
}

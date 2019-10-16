import { SealedInitialState } from "reakit-utils/useSealedState";
import { RoverState, RoverActions, RoverInitialState } from "../Rover/RoverState";
export declare type ToolbarState = RoverState;
export declare type ToolbarActions = RoverActions;
export declare type ToolbarInitialState = RoverInitialState;
export declare type ToolbarStateReturn = ToolbarState & ToolbarActions;
export declare function useToolbarState(initialState?: SealedInitialState<ToolbarInitialState>): ToolbarStateReturn;
export declare namespace useToolbarState {
    var __keys: ("move" | "first" | "last" | "orientation" | "currentId" | "loop" | "stops" | "unstable_pastId" | "unstable_moves" | "register" | "unregister" | "next" | "previous" | "unstable_reset" | "unstable_orientate")[];
}
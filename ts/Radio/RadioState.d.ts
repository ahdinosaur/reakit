import * as React from "react";
import { SealedInitialState } from "reakit-utils/useSealedState";
import { RoverState, RoverActions, RoverInitialState } from "../Rover";
export declare type RadioState = RoverState & {
    /**
     * The `value` attribute of the current checked radio.
     */
    state: any;
};
export declare type RadioActions = RoverActions & {
    /**
     * Sets `state`.
     */
    setState: React.Dispatch<React.SetStateAction<any>>;
};
export declare type RadioInitialState = RoverInitialState & Partial<Pick<RadioState, "state">>;
export declare type RadioStateReturn = RadioState & RadioActions;
export declare function useRadioState(initialState?: SealedInitialState<RadioInitialState>): RadioStateReturn;
export declare namespace useRadioState {
    var __keys: ("move" | "first" | "last" | "state" | "setState" | "orientation" | "currentId" | "loop" | "stops" | "unstable_pastId" | "unstable_moves" | "register" | "unregister" | "next" | "previous" | "unstable_reset" | "unstable_orientate")[];
}
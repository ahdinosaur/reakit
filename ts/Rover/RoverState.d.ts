import * as React from "react";
import { SealedInitialState } from "reakit-utils/useSealedState";
declare type Stop = {
    id: string;
    ref: React.RefObject<HTMLElement>;
};
export declare type RoverState = {
    /**
     * Defines the orientation of the rover list.
     */
    orientation?: "horizontal" | "vertical";
    /**
     * A list of element refs and IDs of the roving items.
     */
    stops: Stop[];
    /**
     * The current focused element ID.
     */
    currentId: Stop["id"] | null;
    /**
     * The last focused element ID.
     * @private
     */
    unstable_pastId: Stop["id"] | null;
    /**
     * Stores the number of moves that have been made by calling `move`, `next`,
     * `previous`, `first` or `last`.
     */
    unstable_moves: number;
    /**
     * If enabled:
     *  - Jumps to the first item when moving next from the last item.
     *  - Jumps to the last item when moving previous from the first item.
     */
    loop: boolean;
};
export declare type RoverActions = {
    /**
     * Registers the element ID and ref in the roving tab index list.
     */
    register: (id: Stop["id"], ref: Stop["ref"]) => void;
    /**
     * Unregisters the roving item.
     */
    unregister: (id: Stop["id"]) => void;
    /**
     * Moves focus to a given element ID.
     */
    move: (id: Stop["id"] | null) => void;
    /**
     * Moves focus to the next element.
     */
    next: () => void;
    /**
     * Moves focus to the previous element.
     */
    previous: () => void;
    /**
     * Moves focus to the first element.
     */
    first: () => void;
    /**
     * Moves focus to the last element.
     */
    last: () => void;
    /**
     * Resets `currentId` and `pastId` states.
     * @private
     */
    unstable_reset: () => void;
    /**
     * Changes the `orientation` state of the roving tab index list.
     * @private
     */
    unstable_orientate: (orientation: RoverState["orientation"]) => void;
};
export declare type RoverInitialState = Partial<Pick<RoverState, "orientation" | "currentId" | "loop">>;
export declare type RoverStateReturn = RoverState & RoverActions;
export declare function useRoverState(initialState?: SealedInitialState<RoverInitialState>): RoverStateReturn;
export declare namespace useRoverState {
    var __keys: ("move" | "first" | "last" | "orientation" | "currentId" | "loop" | "stops" | "unstable_pastId" | "unstable_moves" | "register" | "unregister" | "next" | "previous" | "unstable_reset" | "unstable_orientate")[];
}
export {};

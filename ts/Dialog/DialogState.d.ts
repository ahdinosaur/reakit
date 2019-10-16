import { SealedInitialState } from "reakit-utils/useSealedState";
import { HiddenState, HiddenActions, HiddenInitialState } from "../Hidden/HiddenState";
export declare type DialogState = HiddenState;
export declare type DialogActions = HiddenActions;
export declare type DialogInitialState = HiddenInitialState;
export declare type DialogStateReturn = DialogState & DialogActions;
export declare function useDialogState(initialState?: SealedInitialState<DialogInitialState>): DialogStateReturn;
export declare namespace useDialogState {
    var __keys: ("visible" | "hide" | "show" | "unstable_hiddenId" | "unstable_animated" | "unstable_animating" | "toggle" | "unstable_stopAnimation" | "unstable_setIsMounted")[];
}
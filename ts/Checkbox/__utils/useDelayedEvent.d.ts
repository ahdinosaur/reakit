import * as React from "react";
export declare function useDelayedEvent<E extends React.SyntheticEvent>(event?: React.EventHandler<E>): (syntheticEvent: E) => void;

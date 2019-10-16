'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var warning = require('reakit-utils/warning');
var React = require('react');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-b5804289.js');
var useSealedState = require('reakit-utils/useSealedState');

function reducer(state, action) {
  var stops = state.stops,
      currentId = state.currentId,
      pastId = state.unstable_pastId,
      moves = state.unstable_moves,
      loop = state.loop;

  switch (action.type) {
    case "register":
      {
        var _id = action.id,
            _ref = action.ref;

        if (stops.length === 0) {
          return _rollupPluginBabelHelpers._objectSpread2({}, state, {
            stops: [{
              id: _id,
              ref: _ref
            }]
          });
        }

        var index = stops.findIndex(function (stop) {
          return stop.id === _id;
        });

        if (index >= 0) {
          return state;
        }

        var afterRefIndex = stops.findIndex(function (stop) {
          if (!stop.ref.current || !_ref.current) return false;
          return Boolean(stop.ref.current.compareDocumentPosition(_ref.current) & Node.DOCUMENT_POSITION_PRECEDING);
        });

        if (afterRefIndex === -1) {
          return _rollupPluginBabelHelpers._objectSpread2({}, state, {
            stops: [].concat(stops, [{
              id: _id,
              ref: _ref
            }])
          });
        }

        return _rollupPluginBabelHelpers._objectSpread2({}, state, {
          stops: [].concat(stops.slice(0, afterRefIndex), [{
            id: _id,
            ref: _ref
          }], stops.slice(afterRefIndex))
        });
      }

    case "unregister":
      {
        var _id2 = action.id;
        var nextStops = stops.filter(function (stop) {
          return stop.id !== _id2;
        });

        if (nextStops.length === stops.length) {
          process.env.NODE_ENV !== "production" ? warning.warning(true, "RoverState", _id2 + " stop is not registered") : void 0;
          return state;
        }

        return _rollupPluginBabelHelpers._objectSpread2({}, state, {
          stops: nextStops,
          unstable_pastId: pastId && pastId === _id2 ? null : pastId,
          currentId: currentId && currentId === _id2 ? null : currentId
        });
      }

    case "move":
      {
        var _id3 = action.id;

        if (_id3 === null) {
          return _rollupPluginBabelHelpers._objectSpread2({}, state, {
            currentId: null,
            unstable_pastId: currentId,
            unstable_moves: moves + 1
          });
        }

        var _index = stops.findIndex(function (stop) {
          return stop.id === _id3;
        }); // Item doesn't exist, so we don't count a move


        if (_index === -1) {
          return state;
        }

        if (stops[_index].id === currentId) {
          return _rollupPluginBabelHelpers._objectSpread2({}, state, {
            unstable_moves: moves + 1
          });
        }

        return _rollupPluginBabelHelpers._objectSpread2({}, state, {
          currentId: stops[_index].id,
          unstable_pastId: currentId,
          unstable_moves: moves + 1
        });
      }

    case "next":
      {
        if (currentId == null) {
          return reducer(state, {
            type: "move",
            id: stops[0] && stops[0].id
          });
        }

        var _index2 = stops.findIndex(function (stop) {
          return stop.id === currentId;
        }); // If loop is truthy, turns [0, currentId, 2, 3] into [currentId, 2, 3, 0]
        // Otherwise turns into [currentId, 2, 3]


        var reorderedStops = [].concat(stops.slice(_index2 + 1), loop ? stops.slice(0, _index2) : []);
        var nextIndex = reorderedStops.findIndex(function (stop) {
          return stop.id === currentId;
        }) + 1;
        return reducer(state, {
          type: "move",
          id: reorderedStops[nextIndex] && reorderedStops[nextIndex].id
        });
      }

    case "previous":
      {
        var _reducer = reducer(_rollupPluginBabelHelpers._objectSpread2({}, state, {
          stops: stops.slice().reverse()
        }), {
          type: "next"
        }),
            _ = _reducer.stops,
            nextState = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_reducer, ["stops"]);

        return _rollupPluginBabelHelpers._objectSpread2({}, state, {}, nextState);
      }

    case "first":
      {
        var stop = stops[0];
        return reducer(state, {
          type: "move",
          id: stop && stop.id
        });
      }

    case "last":
      {
        var _stop = stops[stops.length - 1];
        return reducer(state, {
          type: "move",
          id: _stop && _stop.id
        });
      }

    case "reset":
      {
        return _rollupPluginBabelHelpers._objectSpread2({}, state, {
          currentId: null,
          unstable_pastId: null
        });
      }

    case "orientate":
      return _rollupPluginBabelHelpers._objectSpread2({}, state, {
        orientation: action.orientation
      });

    default:
      throw new Error();
  }
}

function useRoverState(initialState) {
  if (initialState === void 0) {
    initialState = {};
  }

  var _useSealedState = useSealedState.useSealedState(initialState),
      orientation = _useSealedState.orientation,
      _useSealedState$curre = _useSealedState.currentId,
      currentId = _useSealedState$curre === void 0 ? null : _useSealedState$curre,
      _useSealedState$loop = _useSealedState.loop,
      loop = _useSealedState$loop === void 0 ? false : _useSealedState$loop;

  var _React$useReducer = React.useReducer(reducer, {
    orientation: orientation,
    stops: [],
    currentId: currentId,
    unstable_pastId: null,
    unstable_moves: 0,
    loop: loop
  }),
      state = _React$useReducer[0],
      dispatch = _React$useReducer[1];

  return _rollupPluginBabelHelpers._objectSpread2({}, state, {
    register: React.useCallback(function (id, ref) {
      return dispatch({
        type: "register",
        id: id,
        ref: ref
      });
    }, []),
    unregister: React.useCallback(function (id) {
      return dispatch({
        type: "unregister",
        id: id
      });
    }, []),
    move: React.useCallback(function (id) {
      return dispatch({
        type: "move",
        id: id
      });
    }, []),
    next: React.useCallback(function () {
      return dispatch({
        type: "next"
      });
    }, []),
    previous: React.useCallback(function () {
      return dispatch({
        type: "previous"
      });
    }, []),
    first: React.useCallback(function () {
      return dispatch({
        type: "first"
      });
    }, []),
    last: React.useCallback(function () {
      return dispatch({
        type: "last"
      });
    }, []),
    unstable_reset: React.useCallback(function () {
      return dispatch({
        type: "reset"
      });
    }, []),
    unstable_orientate: React.useCallback(function (o) {
      return dispatch({
        type: "orientate",
        orientation: o
      });
    }, [])
  });
}
var keys = ["orientation", "stops", "currentId", "unstable_pastId", "unstable_moves", "loop", "register", "unregister", "move", "next", "previous", "first", "last", "unstable_reset", "unstable_orientate"];
useRoverState.__keys = keys;

exports.useRoverState = useRoverState;
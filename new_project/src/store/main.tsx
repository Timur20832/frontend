import { createStore } from "redux";

const defaultState = {
  cash: 0,
};

type actionProps = {
  type: string;
  props?: any;
};

const reducer = (state = defaultState, action: actionProps) => {
  switch (action.type) {
    case "add":
      return { ...state, cash: state.cash + action.props };
    case "get":
      return { ...state, cash: state.cash - action.props };
    default:
      return state;
  }
};

export const store = createStore(reducer);

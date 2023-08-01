import addItem from "./addItem";

const rootReducers = (state = {}, action) => {
  return {
    ...state,
    ...state,
    ...state,
    addItem: addItem(state.addItem, action),
  };
};

export default rootReducers;

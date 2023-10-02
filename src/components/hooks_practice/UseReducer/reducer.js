const reducer = (current_state, action) => {
  switch (action.type) {
    case "INC":
      current_state = current_state + 1;
      return current_state;
    case "DEC":
      let newState = 0;
      current_state >= 1 ? (newState = current_state - 1) : (newState = 0);
      return newState;
    default:
      return current_state;
  }
};

export default reducer;

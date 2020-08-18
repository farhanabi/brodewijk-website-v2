// source from: https://github.com/FortechRomania/react-redux-complete-example
export default (initialState) => (reducerMap) => (state = initialState, action) => {
  const reducer = reducerMap[action.type];
  return reducer ? reducer(state, action) : state;
};

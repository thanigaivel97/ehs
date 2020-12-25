/*jshint esversion: 9 */
const reducer = (state = {},action ={}) => {
  switch (action.type) {
    case "setLoginResponse": {
      state = { ...action.payload };
      return state;
    }
    default:
      return state;
  }
};
export default reducer;

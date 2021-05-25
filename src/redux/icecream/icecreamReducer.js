import { BUY_ICECREAM } from "./icecreamTypes";

const initialState = {
  numOfIcecreams: 20,
};

const icecreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - action.payload.num,
      };
    default:
      return state;
  }
};
export default icecreamReducer;

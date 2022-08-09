import { SET_NAME } from './ActionTypes';

// import { PURGE } from 'redux-persist';

const initialState = {
   name: '',
};

const Reducers = (state = initialState, action) => {
   switch (action.type) {
      //   case PURGE:
      //      return initialState;
      case SET_NAME:
         return {
            ...state,
            name: action.payload,
         };

      default:
         return state;
   }
};
export default Reducers;

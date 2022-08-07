import { SET_NAME } from './ActionTypes';

export const setName = (data) => {
   return {
      type: SET_NAME,
      payload: data,
   };
};

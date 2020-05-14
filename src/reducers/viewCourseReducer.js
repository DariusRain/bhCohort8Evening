
import { SHOW_COMMENTS } from "../actions/types";

const INITIAL_STORE = {
  showComments: false,
};

export default (store = INITIAL_STORE, action) => {
  switch (action.type) {
    case SHOW_COMMENTS:
      console.log(34, "l")
      return {
        ...store,
        showComments: !store.showComments,
      };
      
    default:
      return store;
  }
};

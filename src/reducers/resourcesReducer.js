import resources from "../mock/resources";
import { INCREMENT, SUBMIT_FORM, FIND_COURSE_BY_ID } from "../actions/types";

const INITIAL_STORE = {
  list: [...resources],
  loading: true,
  errors: {},
  count: 0,
};

export default (store = INITIAL_STORE, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...store,
        count: action.payload,
      };
    case SUBMIT_FORM:
      const newResource = action.payload;
      newResource.id = store.list[store.list.length - 1].id + 1;
      return {
        ...store,
        list: [...store.list, newResource],
      };

    // DR: Added a find by id action
    case FIND_COURSE_BY_ID:
      let { courseId } = action.payload;
      courseId = parseInt(courseId);
      console.log(20,action)
      const course = store.list.find(
        (currCourse) => currCourse.id === courseId
      );
      return {
        ...store,
        course
      }
    
    default:
      return store;
  }
};

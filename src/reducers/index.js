import { combineReducers } from "redux";
import resoursesReducer from "./resourcesReducer";
import newResourceReducer from "./newResourceReducer";
import viewCourseReducer from "./viewCourseReducer";
// DR: Importing the ViewCourse Reducer
export default combineReducers({
  resources: resoursesReducer,
  newResource: newResourceReducer,
  viewCourse: viewCourseReducer
});

import { SHOW_COMMENTS } from "./types";

export const toggleComments = (showComments) => (dispatch) => {
  console.log(33, "l")
  dispatch({type: SHOW_COMMENTS, payload: showComments});
  
}


// No use yet
// export const findCourseById = (courseId) => (dispatch) => {
//     console.log(13, courseId)
//   dispatch({
//     type: FIND_COURSE_BY_ID,
//     payload: {
//       courseId,
//     },
//   });
// }
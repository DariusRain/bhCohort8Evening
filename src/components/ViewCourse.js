import React, { Fragment } from "react";

// DR: Newly created items
import ErrorPage from "./errors/ErrorPage"; // Expects one prop named message
import Youtube from "./common/Youtube"; // Also one prop named link
import Stars from "./common/Stars"; // Also one prop named rating
import Comments from "./common/Comments";

import { useParams, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Button from "./common/Button";

// DR: Toogles a boolean value located @store.viewCourse
import { toggleComments } from "../actions";
import { SHOW_COMMENTS } from "../actions/types";

// Deconstructs from mapStoreToProps and map
function ViewCourse({ list, toggleComments }) {
  // Get URL Id parameter
  const { courseId } = useParams();

  // Find the course with the 'props.list' array that passed from redux.
  const course = list.find((course) => course.id == courseId);

  // Probably a better solution, possible to cause errors.
  const {
    title,
    resourceAuthor,
    link,
    rating,
    categories,
    posterName,
    comments,
    cohort,
    summary,
    showComments,
  } = course ? course : <div />; // <- Probably a better way of handling the issue. 
  //  console.log(props)
  return (
    <Fragment>
      {/* If course does exist then show it else 404 */}
      
      {course ? (
        <div>
          <h3>{title}</h3>

          <h4>{resourceAuthor}</h4>

          <div style={myStyles.row}>
            <p>Shared by: {posterName}</p>
            <p>Cohort: {cohort}</p>
          </div>

          <p>{summary}</p>

          <Youtube link={link} />

          <div style={myStyles.row}>
            <p>
              <a href={link}>View Resource</a>
            </p>
            <Stars rating={rating} />
          </div>

          {categories ? (
            <div style={myStyles.row}>{categories.join(", ")}</div>
          ) : null}

          {/* A Redux action creator lives here by the name of toggleComments */}
          <Button onClick={() => toggleComments(showComments)} buttonStyle={myStyles.button}>
            {showComments ? "Hide Comments" : "Show Comments"}
          </Button>

          {/* showComments from redux */}
          {showComments ? <Comments comments={comments} /> : null}
        </div>
      ) : (
        <ErrorPage message={"404 Not Found..."} />
      )}
    </Fragment>
  );
}

// DR: Attempting to componentize the above render youtube function

// DR: Attempting to componentize the above render stars function (Readability)

// DR: Attempting to componentize the above render stars function

const myStyles = {
  row: {
    marginRight: "8%",
    marginLeft: "8%",
    display: "flex",
    flexDirection: "row",
    marginTop: "10px",
    marginBottom: "10px",
    selfAlign: "center",
    justifyContent: "space-evenly",
  },

  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    height: "100vh",
    width: "80%",
    justifyContent: "flex-start",
    alignItems: "center",
    border: "1px solid blue",
    boxShadow: "5px 3px 5px blue",
    marginTop: 16,
    marginBottom: 16,
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: 16,
    paddingBottom: 16,
  },

  button: {
    marginTop: 16,
    backgroundColor: "blue",
    color: "white",
  },
};

const mapActionsToProps = {
  toggleComments
}
 

const mapStoreToProps = (store) => ({
  list: store.resources.list,
  showComments: store.viewCourse.showComments,
});

export default connect(
  mapStoreToProps,
  mapActionsToProps
)(withRouter(ViewCourse));

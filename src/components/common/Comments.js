import React from "react";

export default function Comments({ comments }){
    return comments.map((comment) => {
      return (
        <div className="box">
          <p>{comment.user}: </p>
          <p>{comment.text}</p>
        </div>
      );
    });
  }
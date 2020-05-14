import React from "react";

function Youtube({ link }) {
  const videoIdIndex = link.indexOf("?v=");
  const videoId = link.substring(videoIdIndex + 3);
  console.log(videoId);

  if (link.indexOf("youtube") >= 0) {
    const videoId = link.substring(videoIdIndex + 3);
    return (
      <div>
        <iframe
          title="video"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    );
  }
}

export default Youtube;

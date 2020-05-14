import React from "react"
export default function Stars({ rating }) {
    let stars = "";
 
    for (let i = 0; i < rating; i++) {
      stars += "★ ";
    }
    return (
        <p>
        Rating: {stars}
        </p>
    )
  }
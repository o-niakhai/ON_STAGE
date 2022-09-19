import React from "react";
import "./styles.css";
import Video from "./VideoRender";

export default function ArtistVideo() {
  return (
    <>
    try {
        <Video videoId="zBKei6Ji_WI" />
    } catch (error) {
        console.log(error)
    }
      
    </>
  );
}

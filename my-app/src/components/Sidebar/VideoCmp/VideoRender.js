import React from "react";
import YouTube from "react-youtube";

export default class Video extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  render() {
    return <YouTube ref={this.videoRef} videoId="zBKei6Ji_WI" />;
  }
}


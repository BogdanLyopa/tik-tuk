import { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter/VideoFooter";
import VideoSidebar from "./VideoSidebar/VideoSidebar";
import Card from "@mui/material/Card";

export default function Video({
  videoSrc,
  name,
  text,
  hashtags,
  avatarSrc,
  likes,
  comments,
  imgSrc,
}) {
  const [playing, setPlaying] = useState(true);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <Card>
      <div className="video">
        <video
          className="video__player"
          onClick={onVideoPress}
          ref={videoRef}
          loop
          src={videoSrc}
          poster={imgSrc}
          autoPlay
          muted
        ></video>
        <VideoSidebar
          likes={likes}
          avatarSrc={avatarSrc}
          comments={comments}
          name={name}
        />
        <VideoFooter name={name} text={text} hashtags={hashtags} />
      </div>
    </Card>
  );
}

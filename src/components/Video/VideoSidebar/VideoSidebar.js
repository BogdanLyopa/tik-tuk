import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

import "./VideoSidebar.css";

export default function VideoSidebar({ avatarSrc, likes, comments, name }) {
  return (
    <div className="videoSidebar">
      {" "}
      <Link to={{ pathname: `user/${name}` }}>
        <Avatar src={avatarSrc} alt="" />
      </Link>
      <div>
        <div className="likes">
          <FavoriteBorderIcon />
          <span>{likes}</span>
        </div>
        <div className="comments">
          <CommentIcon />
          <span>{comments}</span>
        </div>
      </div>
    </div>
  );
}

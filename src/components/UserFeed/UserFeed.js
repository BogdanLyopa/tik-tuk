import "./UserFeed.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useSelector } from "react-redux";
import {
  getTrendingFeeds,
  getUserFeeds,
} from "../../redux/feeds/feedsSelectors";

export default function UserFeed() {
  const feeds = useSelector(getTrendingFeeds);

  // const feeds = useSelector(getUserFeeds);
  return (
    <ul className="userFeed">
      {feeds.length > 0 &&
        feeds.map((item) => {
          return (
            <li key={item.id} className="userFeed__item">
              <video
                onMouseOver={(event) => event.target.play()}
                onMouseOut={(event) => event.target.pause()}
                poster={item.covers.default}
                muted
                loop
                src={item.videoUrl}
              ></video>
              <div className="userFeed__views">
                <PlayArrowIcon />
                <p>{item.playCount}</p>
              </div>
            </li>
          );
        })}
    </ul>
  );
}

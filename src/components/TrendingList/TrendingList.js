import "./TrendingList.css";
import Video from "../Video/Video";
import { getTrendingFeeds } from "../../redux/feeds/feedsSelectors";
import { useSelector } from "react-redux";

export default function TrendingList() {
  const feeds = useSelector(getTrendingFeeds);
  return (
    <ul className="trending__list">
      {feeds.map((item) => {
        return (
          <li key={item.id} className="trending__item">
            <Video
              videoSrc={item.videoUrl}
              name={item.authorMeta.name}
              text={item.text}
              hashtags={item.hashtags}
              avatarSrc={item.authorMeta.avatar}
              likes={item.diggCount}
              comments={item.commentCount}
              imgSrc={item.covers.default}
            />
          </li>
        );
      })}
    </ul>
  );
}

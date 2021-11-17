import "./UserInfo.css";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";
import { getUserInfo } from "../../redux/feeds/feedsSelectors";

export default function UserInfo() {
  const info = useSelector(getUserInfo);

  return (
    <div className="user">
      {!Array.isArray(info) && (
        <div>
          <Avatar
            className="user__img"
            sx={{ width: 200, height: 200 }}
            src={info.user.avatarLarger}
            alt=""
          />
          <h1>{info.user.nickname}</h1>
          <ul className="user__stats">
            <li>Following: {info.stats.followingCount}</li>
            <li>Follower: {info.stats.followerCount}</li>
            <li>Likes: {info.stats.heart}</li>
          </ul>
          <p>{info.user.signature}</p>
        </div>
      )}
    </div>
  );
}

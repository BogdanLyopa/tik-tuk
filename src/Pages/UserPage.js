import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserFeed from "../components/UserFeed/UserFeed";
import UserInfo from "../components/UserInfo/UserInfo";
import { useParams } from "react-router-dom";
import Loader from "react-loader-spinner";
import feedsOperations from "../redux/feeds/feedsOperations";
import { getError, getLoading } from "../redux/feeds/feedsSelectors";
export default function UserPage() {
  const match = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(feedsOperations.getUserInfo(match.name));
    // dispatch(feedsOperations.getUserFeeds(match.name));
    dispatch(feedsOperations.fetchTrendingFeeds());
  }, [match, dispatch]);

  return (
    <div className="container">
      {loading ? (
        <Loader
          className="loader"
          type="Circles"
          color="#00BFFF"
          height={200}
          width={200}
        />
      ) : (
        <div>
          <UserInfo />
          <UserFeed />
        </div>
      )}
      {error && <p className="error">Error!!!</p>}
    </div>
  );
}

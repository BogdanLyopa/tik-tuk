import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import TrendingList from "../components/TrendingList/TrendingList";
import Loader from "react-loader-spinner";
import feedsOperations from "../redux/feeds/feedsOperations";
import { getError, getLoading } from "../redux/feeds/feedsSelectors";

export default function TrendingPage() {
  const dispatch = useDispatch();
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(feedsOperations.fetchTrendingFeeds());
  }, [dispatch]);

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
        <TrendingList />
      )}
      {error && <p className="error">Error!!!</p>}
    </div>
  );
}

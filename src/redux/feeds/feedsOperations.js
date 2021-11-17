import axios from "axios";
import {
  fetchFeedsRequest,
  fetchFeedsSuccess,
  fetchFeedsError,
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoError,
  getUserFeedsRequest,
  getUserFeedsSuccess,
  getUserFeedsError,
} from "./feedsAction";

const BASE_URL = "https://tiktok33.p.rapidapi.com";

const API_KEY = "7c47150123msh726af5dc72d2b91p15a0bdjsn9c3fcd3448a1";

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers = {
  "x-rapidapi-host": "tiktok33.p.rapidapi.com",
  "x-rapidapi-key": API_KEY,
};

const fetchTrendingFeeds = () => async (dispatch) => {
  dispatch(fetchFeedsRequest());

  try {
    const { data } = await axios.get("/trending/feed");
    dispatch(fetchFeedsSuccess(data));
  } catch (error) {
    dispatch(fetchFeedsError(error));
  }
};

const getUserInfo = (name) => async (dispatch) => {
  dispatch(getUserInfoRequest());

  try {
    const { data } = await axios.get(`/user/info/${name}`);
    dispatch(getUserInfoSuccess(data));
  } catch (error) {
    dispatch(getUserInfoError(error));
  }
};

const getUserFeeds = (name) => async (dispatch) => {
  dispatch(getUserFeedsRequest());

  try {
    const { data } = await axios.get(`/user/feed/${name}`);
    dispatch(getUserFeedsSuccess(data));
  } catch (error) {
    dispatch(getUserFeedsError(error));
  }
};

export default {
  fetchTrendingFeeds,
  getUserInfo,
  getUserFeeds,
};

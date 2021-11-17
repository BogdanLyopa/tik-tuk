import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
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

const trendingFeeds = createReducer([], {
  [fetchFeedsSuccess]: (_, { payload }) => payload,
});

const info = createReducer([], {
  [getUserInfoSuccess]: (_, { payload }) => payload,
});

const userFeeds = createReducer([], {
  [getUserFeedsSuccess]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchFeedsRequest]: () => true,
  [fetchFeedsSuccess]: () => false,
  [fetchFeedsError]: () => false,
  [getUserInfoRequest]: () => true,
  [getUserInfoSuccess]: () => false,
  [getUserInfoError]: () => false,
  [getUserFeedsRequest]: () => true,
  [getUserFeedsSuccess]: () => false,
  [getUserFeedsError]: () => false,
});

const error = createReducer(null, {
  [fetchFeedsError]: (_, { payload }) => payload,
  [getUserInfoError]: (_, { payload }) => payload,
  [getUserFeedsError]: (_, { payload }) => payload,
});

export default combineReducers({
  trendingFeeds,
  info,
  userFeeds,
  loading,
  error,
});

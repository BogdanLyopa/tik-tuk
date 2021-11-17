import { createAction } from "@reduxjs/toolkit";

export const fetchFeedsRequest = createAction("feeds/fetchFeedsRequest");
export const fetchFeedsSuccess = createAction("feeds/fetchFeedsSuccess");
export const fetchFeedsError = createAction("feeds/fetchFeedsError");

export const getUserInfoRequest = createAction("feeds/getUserInfoRequest");
export const getUserInfoSuccess = createAction("feeds/getUserInfoSuccess");
export const getUserInfoError = createAction("feeds/getUserInfoError");

export const getUserFeedsRequest = createAction("feeds/getUserFeedsRequest");
export const getUserFeedsSuccess = createAction("feeds/getUserFeedsSuccess");
export const getUserFeedsError = createAction("feeds/getUserFeedsError");

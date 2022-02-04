import {all} from "redux-saga/effects";

import {watchPollMarketData} from "./market.saga";

export default function* rootSage() {
	yield all([watchPollMarketData()]);
}

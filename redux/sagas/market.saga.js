import {call, put, take, race, delay, takeEvery} from "redux-saga/effects";

import {
	FETCH_24HRS_TICKER,
	FETCH_24HRS_TICKER_SUCCESS,
	FETCH_24HRS_TICKER_FAILURE,
	START_POLLING,
	STOP_POLLING,
} from "../actions/market.action";

import axios from "axios";

// Fetch 24Hrs Ticker from API.
function fetch24hrsTickerAPI({pair}) {
	return axios({
		method: "get",
		url: `https://satangcorp.com/api/v3/ticker/24hr?symbol=${pair}`,
		headers: {},
	});
}

// Polling every 5 second
function* workGet24hrsTickerFetchPolling(action) {
	while (true) {
		try {
			const {data} = yield call(fetch24hrsTickerAPI, {pair: action.pair});
			yield put({type: FETCH_24HRS_TICKER_SUCCESS, data: data});
			yield delay(5000);
		} catch (e) {
			yield put({type: FETCH_24HRS_TICKER_FAILURE, message: e.message});
		}
	}
}

function* workGet24hrsTickerFetch(action) {
	try {
		const {data} = yield call(fetch24hrsTickerAPI, {pair: action.pair});
		yield put({type: FETCH_24HRS_TICKER_SUCCESS, data: data});
	} catch (e) {
		yield put({type: FETCH_24HRS_TICKER_FAILURE, message: e.message});
	}
}

export function* watchPollMarketData() {
	yield takeEvery(FETCH_24HRS_TICKER, workGet24hrsTickerFetch);
	while (true) {
		const data = yield take([START_POLLING]);
		yield race([
			call(workGet24hrsTickerFetchPolling, data),
			take(STOP_POLLING),
		]);
	}
}

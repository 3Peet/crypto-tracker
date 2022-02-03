import {call, put, takeEvery} from "redux-saga/effects";
import {
	GET_PAIR_DATA_FETCH,
	GET_PAIR_DATA_SUCCESS,
	GET_PAIR_DATA_FAILURE,
} from "../types";

function pairDataFetch({pair}) {
	return fetch(`https://satangcorp.com/api/v3/ticker/24hr?symbol=${pair}`).then(
		(response) => response.json()
	);
}

function* workGetPairDataFetch(data) {
	try {
		const pairData = yield call(pairDataFetch, {pair: data.pair});
		yield put({type: GET_PAIR_DATA_SUCCESS, pairData});
	} catch (error) {
		yield put({type: GET_PAIR_DATA_FAILURE});
	}
}

function* watchPairData() {
	yield takeEvery(GET_PAIR_DATA_FETCH, workGetPairDataFetch);
}

export default watchPairData;

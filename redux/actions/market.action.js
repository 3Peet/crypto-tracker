export const FETCH_24HRS_TICKER = "FETCH_24HRS_TICKER";
export const FETCH_24HRS_TICKER_SUCCESS = "FETCH_24HRS_TICKER_SUCCESS";
export const FETCH_24HRS_TICKER_FAILURE = "FETCH_24HRS_TICKER_FAILURE";
export const START_POLLING = "START_POLLING";
export const STOP_POLLING = "STOP_POLLING";

export function startPolling(pair) {
	return {
		type: START_POLLING,
		pair,
	};
}

export function stopPolling() {
	return {
		type: STOP_POLLING,
	};
}

export function fetch24hrsTicker(pair) {
	return {
		type: FETCH_24HRS_TICKER,
		pair,
	};
}

export function fetch24hrsTickerSuccess(data) {
	return {
		type: FETCH_24HRS_TICKER_SUCCESS,
		data,
	};
}

export function fetch24hrsTickerFail(error) {
	return {
		type: FETCH_24HRS_TICKER_FAILURE,
		error,
	};
}
